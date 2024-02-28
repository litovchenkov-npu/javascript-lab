const person = {
    getPerson: function(name, age) {
        return `${name} is ${age} years old`;
    }
};

let user = {
    name: 'John',
    age: 41
}

console.log(person.getPerson.call(user, user.name, user.age));

console.log(person.getPerson.apply(user, ['Jane', 22]));

const getUser = person.getPerson.bind(user);
console.log(getUser('Mike', 34));