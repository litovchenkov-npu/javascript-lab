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

// const myShape = new Shape();

const myCircle = new Circle(4);
console.log(`Circle area: ${myCircle.area()}`);
console.log(`Circle perimeter: ${myCircle.perimeter()}`);

const myRectangle = new Rectangle(3, 5);
console.log(`Rectangle area: ${myRectangle.area()}`);
console.log(`Rectangle perimeter: ${myRectangle.perimeter()}`);