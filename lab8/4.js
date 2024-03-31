function compareTexts(text1, text2, locale, ignoreCase = false) {
    const options = { sensitivity: ignoreCase ? 'base' : 'variant' };
    return text1.localeCompare(text2, locale, options);
}

const text1 = 'apple';
const text2 = 'orange';

switch (compareTexts(text1, text2, 'en-US', false)) {
    case -1:
        console.log(`\"${text1}\" comes before \"${text2}\"`);
        break;
    case 0:
        console.log(`\"${text1}\" and \"${text2}\" are identical`);
        break;
    case 1:
        console.log(`\"${text1}\" comes after \"${text2}\"`);
        break;
    default:
        break;
}