function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

const adderWith5 = createAdder(5);
console.log(adderWith5(10));