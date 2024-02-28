function compareClasses(obj1, obj2) {
    const class1 = obj1.constructor.name;
    const class2 = obj2.constructor.name;
    
    if (class1 === class2) {
        console.log(`Both objects are instances of ${class1}`);
    } else {
        console.log(`Object 1: ${class1}\nObject 2: ${class2}`);
    }
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const Car1 = new Car('Honda', 'Civic', 2000);
const Car2 = new Car('Toyota', 'Camry', 2015);

compareClasses(Car1, Car2);

const Car3 = {};

compareClasses(Car1, Car3);