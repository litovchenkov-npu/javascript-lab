function invoke(callback, ...args) {
    console.log(`function name: ${callback.name}`);
    console.log(`args: ${args}`)
    console.log(`execution time: ${new Date()}`);
    console.log('function result:');
    return callback(...args);
}

function pow(x, n) {
    return x ** n;
}

console.log(invoke(pow, 2, 5));