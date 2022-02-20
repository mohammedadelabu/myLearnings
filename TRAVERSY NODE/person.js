// const person = {
//     name: 'Emperor Hassy',
//     age: 20,
//     location: "Abuja"
// }

// Module Wrapper Function

// (function (exports, require, module, __filename, __dirname){

// })

console.log(__dirname, __filename);

class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    greeting(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old and live in ${this.location}.`);
    }
}

module.exports = Person;