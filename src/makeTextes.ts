class MakeTextes {

    /* make textes from file listing, convert md to html */

    public showdown = require('showdown');
    public converter = new this.showdown.Converter();

    constructor(private text: string) {
        this.text = text;
    }

    public textesBody(): string {
            const chapitre = this.textId(this.text);
            let section = `<section id="${chapitre}" class="subchapter">`;
            const html: string = this.converter.makeHtml(this.text);
            section = section.concat(html);
            section = section.concat(`</section>`);
            return section;
    }

    private textName(name: string): string {
        try {
            const re = /.*/m;
            const str = name.match(re);
            const parsedName = str[0].slice(2);
            if (parsedName) {
                return parsedName.trim();
            }
        } catch (e) {
            console.log(e);
        }
    }

    private textId(name: string): string {
        try {
            const chapitre = this.textName(name);
            const re = /(\s)/gi;
            const str = chapitre.replace(re, '-').toLowerCase();
            if (str) {
                return str;
            } else {
                return name;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default MakeTextes;
