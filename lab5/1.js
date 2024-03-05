function invokeAfterDelay(callback, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(callback), delay);
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

invokeAfterDelay(getRandomNumber(), 3000).then((response) => console.log(response));