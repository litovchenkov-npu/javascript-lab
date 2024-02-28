function Person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    this.getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}`);
    }
}

function Employee(firstName, lastName, birthDate, position) {
    Person.call(this, firstName, lastName, birthDate);
    
    this.position = position;

    this.getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}\nPosition: ${this.position}`);
    }
}

const myEmployee = new Employee('Jane', 'Doe', new Date(1971, 4, 12), 'Engineer');

myEmployee.getFullInfo();