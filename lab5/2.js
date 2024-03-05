function invokeAfterDelay(callback, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(callback), delay);
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(getRandomNumber(), delay);
}

Promise.all([produceRandomAfterDelay(3000), produceRandomAfterDelay(3000)]).then(results => {
    const sum = results.reduce((acc, curr) => acc + curr);
    console.log(sum);
})