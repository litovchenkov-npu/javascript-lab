class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot instantiate abstract class Shape");
        }
    }

    Area() {
        throw new Error("Abstract method 'calculateArea()' must be implemented");
    }

    Perimeter() {
        throw new Error("Abstract method 'calculatePerimeter()' must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const shapesArray = [new Circle(4), new Rectangle(8, 12), new Circle(6), new Circle(82), new Rectangle(32, 16)];

let count = 0;
for(shape of shapesArray) {
    count++;
    console.log(`Shape ${count}:
    Shape type: ${shape.constructor.name}
    Shape area: ${shape.area()}
    Shape perimeter: ${shape.perimeter()}`);
}