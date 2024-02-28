function CarFunc(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const myCarFunc = new CarFunc('Toyota', 'Camry', 2015);

console.log(myCarFunc);

class CarClass {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const myCarClass = new CarClass('Honda', 'Civic', 2000);

console.log(myCarClass);