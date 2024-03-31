function localeTemplate(template, ...args) {
    for(let i = 0; i < args.length; i++) {
        template = template.replace(`{${i}}`, args[i]);
    }
    return template;
}

const template1 = '{0} has {1} messages';
const template2 = 'Il y a {1} messages pour {0}';

console.log(localeTemplate(template1, 'John', 12));
console.log(localeTemplate(template2, 'Jean', 7));