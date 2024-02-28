function getGreeting(name) {
    if (!this.cache) {
        this.cache = {};
    }

    if (this.cache[name]) {
        return `Hello ${this.cache[name]}`;
    } else {
        this.cache[name] = name;
        return `Hello ${name}`;
    }
}

console.log(getGreeting('John'));
console.log(getGreeting('Jane'));
console.log(getGreeting('John'));