function callWithContext(obj, callback) {
    callback.call(obj);
}
  
const person = {
    name: "John",
    age: 30
};
  
function birthdayMessage() {
    const today = new Date().toLocaleDateString();
    console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayMessage);