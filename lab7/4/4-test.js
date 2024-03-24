const { encrypt, decrypt } = require('./4.js');

const message = 'This message is using Caesar cipher';

const encryptedMessage = encrypt(message, 5);
console.log(`Encrypted message: ${encryptedMessage}`);

const decryptedMessage = decrypt(encryptedMessage, 5);
console.log(`Decrypted message: ${decryptedMessage}`);