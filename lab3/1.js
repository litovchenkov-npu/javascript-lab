function average(...args) {
    return args.reduce((acc, val) => acc + val) / args.length;
}

console.log(average(1, 32, 343, 93, 55));