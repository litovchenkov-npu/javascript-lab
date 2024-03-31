const date = new Date();

console.log(`French format: ${new Intl.DateTimeFormat('fr').format(date)}`);
console.log(`Chinese format: ${new Intl.DateTimeFormat('zh').format(date)}`);
console.log(`Egyptian format: ${new Intl.DateTimeFormat('egx').format(date)}`);
console.log(`Thai format: ${new Intl.DateTimeFormat('th-TH-u-nu-thai').format(date)}`);