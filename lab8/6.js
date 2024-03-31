class PaperSize {
    constructor(locale) {
        this.locale = locale;
        this.unit = this.imperialSystemCountries.includes(this.locale) ? 'in' : 'mm';
        this.defaultSize = this.imperialSystemCountries.includes(this.locale) ?
            { width: 8.5, height: 11 } :
            { width: 210, height: 297 };
    }

    imperialSystemCountries = ['en-US', 'en-CA', 'en-LR', 'en-MM'];

    getSize() {
        return `${this.defaultSize.width} ${this.unit} x ${this.defaultSize.height} ${this.unit}`;
    }
}

const paper1 = new PaperSize('en-US');
const paper2 = new PaperSize('fr');

console.log(paper1.getSize());
console.log(paper2.getSize());