const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 25, city: 'New York' },
    { name: 'Tom', age: 19, city: 'Austin' },
    { name: 'James', age: 22, city: 'Washington' },
    { name: 'Arthur', age: 29, city: 'San Francisco' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

console.log("Елементи масиву:");
for (const person of persons) {
    console.log(person);
}

console.log("Властивості масиву:")
for (const prop in persons) {
    console.log(prop + ": " + persons[prop]);
}