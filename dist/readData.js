"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const makeTextes_1 = require("./makeTextes");
class ReadData {
    constructor(pathToFolder) {
        this.pathToFolder = pathToFolder;
        this.srcFolder = path.join(__dirname, this.pathToFolder);
        this.readFolder();
    }
    readFolder() {
        const one = new Promise((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                const result = [];
                for (const file of items) {
                    const text = fs.readFileSync(this.srcFolder + file, 'utf8');
                    const md2html = new makeTextes_1.default(text);
                    result.push(md2html.textesBody());
                }
                resolve(result.join('\n'));
            });
        });
        return one;
    }
}
exports.default = ReadData;
//# sourceMappingURL=readData.js.map