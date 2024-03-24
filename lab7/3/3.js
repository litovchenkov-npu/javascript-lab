import CryptoJS from 'crypto-js';

function encryptMessage(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function decryptMessage(encryptedMessage, key) {
    return CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}

const originalMessage = "This message is encrypted";

const encryptionKey = "1234567890";

const encryptedMessage = encryptMessage(originalMessage, encryptionKey);
console.log("Encrypted message:", encryptedMessage);

const decryptedMessage = decryptMessage(encryptedMessage, encryptionKey);
console.log("Decrypted message:", decryptedMessage);