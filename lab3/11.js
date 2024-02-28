function cachedFunction(func, cacheDuration) {
    let lastResult;
    let lastInvoke;

    return function(...args) {
        if (!lastInvoke || (Date.now() - lastInvoke) > cacheDuration) {
            lastResult = func(...args);
            lastInvoke = Date.now();
        }
        return lastResult;
    };
}

function pow(x, n) {
    return x ** n;
}

const cachedPow = cachedFunction(pow, 10000);

console.log(cachedPow(2, 5));
console.log(`cached: ${cachedPow()}`);
setTimeout(() => { console.log(cachedPow(2, 3)) }, 11000);