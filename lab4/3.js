function Person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    this.getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}`);
    }
}

const myPerson = new Person('Jane', 'Doe', new Date(1971, 4, 12).toLocaleDateString());

myPerson.getFullInfo();