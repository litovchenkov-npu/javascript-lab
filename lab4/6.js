function Person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    this.getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}`);
    }
}

function ObservedPerson(person) {
    this.person = person;
    this.calls = 0;

    this.getFullInfo = function() {
        this.calls++;
        this.person.getFullInfo();
    }
}

const myPerson = new Person('Jane', 'Doe', new Date(1971, 4, 12))
const myObservedPerson = new ObservedPerson(myPerson);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);