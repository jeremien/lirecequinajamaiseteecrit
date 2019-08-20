"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeChapitres {
    /* make chapitres from folders listing */
    constructor(folder) {
        this.folder = folder;
        this.folder = folder;
    }
    chapitresBody() {
        const num = this.getChapitreNum(this.folder);
        const name = this.getChapitreName(this.folder);
        const title = this.makeTitle(name, ', ');
        const id = this.makeTitle(name, '-');
        const section = `<section id="${id}" class="chapter" data-chapter="${num}"><h1>${title}</h1></section>`;
        return section;
    }
    getChapitreNum(name) {
        try {
            const re = /^([0-9]+)/g;
            const data = name.match(re);
            const numero = data[0];
            return numero;
        }
        catch (e) {
            console.log(e);
        }
    }
    getChapitreName(name) {
        const re = /".*?"/g;
        const data = name.match(re);
        return data;
    }
    makeTitle(data, separator) {
        const re = /"/g;
        const str = data.join(separator).replace(re, '');
        return str;
    }
}
exports.default = MakeChapitres;
//# sourceMappingURL=makeChapitres.js.map