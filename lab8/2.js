const number = 1234.56;

console.log(
    `English format: ${new Intl.NumberFormat('en-US').format(number)}`
);

console.log(
    `Arabic format: ${new Intl.NumberFormat('ar').format(number)}`
);

console.log(
    `Thai format: ${new Intl.NumberFormat('th-TH-u-nu-thai').format(number)}`
);