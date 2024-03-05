function logCall(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentTime = new Date();
            console.log(currentTime);
            callback();
            resolve(currentTime);
        }, 1000);
    });
}
  
function callback() {
    console.log('Callback function');
}
  
logCall(callback)
    .then(() => logCall(callback))
    .then(() => logCall(callback))
    .then(() => logCall(callback))
    .catch(error => console.error('Error:', error));