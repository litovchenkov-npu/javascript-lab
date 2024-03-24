export function getRandomInt() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function getRandomIntArray(length) {
    const array = [];
    for(let i = 0; i < length; i++) {
        array.push(getRandomInt());
    }
    return array;
}

export function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
}