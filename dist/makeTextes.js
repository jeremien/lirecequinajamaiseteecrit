"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeTextes {
    constructor(text) {
        this.text = text;
        /* make textes from file listing, convert md to html */
        this.showdown = require('showdown');
        this.converter = new this.showdown.Converter();
        this.text = text;
    }
    textesBody() {
        const chapitre = this.textId(this.text);
        let section = `<section id="${chapitre}" class="subchapter">`;
        const html = this.converter.makeHtml(this.text);
        section = section.concat(html);
        section = section.concat(`</section>`);
        return section;
    }
    textName(name) {
        try {
            const re = /.*/m;
            const str = name.match(re);
            const parsedName = str[0].slice(2);
            if (parsedName) {
                return parsedName.trim();
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    textId(name) {
        try {
            const chapitre = this.textName(name);
            const re = /(\s)/gi;
            const str = chapitre.replace(re, '-').toLowerCase();
            if (str) {
                return str;
            }
            else {
                return name;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = MakeTextes;
//# sourceMappingURL=makeTextes.js.map