const person = {
  name: "Emperor",
  age: 30,
  greet() {
    // console.log('Hi, I am ' + this.name);
    console.log(`Hi, I am  ${this.name}.`);
  },
};
person.greet();

const hobbies = ["Sports", "Cooking"];
// console.log(hobbies.map(home => 'Hobby: ' + home));
// console.log(hobbies);

hobbies.push("Programming");
console.log(hobbies);

// SPREAD OPERATOR
const copiedPerson = { ...person };
console.log(copiedPerson);

const copiedArray = [...hobbies];
console.log(copiedArray);

// REST OPERATOR
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3, 4));

const toArray2 = (...args) => {
  return args;
};
console.log(toArray2(1, 2, 3, 4));

const toArray3 = (...args) => args;
console.log(toArray3(1, 2, 3, 4));

// OBJECT DESTRUCTURING 1.
const persons = {
  name: "Emperor",
  age: 30,
  greet() {
    // console.log('Hi, I am ' + this.name);
    console.log(`Hi, I am  ${this.name}.`);
  },
};

const printName = ({ name }) => {
  console.log(name);
};
printName(persons);

// OBJECT DESTRUCTURING 2
const { name, age } = persons;
console.log(name, age);

// ARRAY DESTRUCTURING
const food = ["rice", "eba", "yam"];
const [food1, food2, food3] = food;
console.log(food1, food2, food3);

// ASYNC CODE AND PROMISES
// setTimeout(() => {
//     console.log('Timer is done');
// }, 2000);
// console.log('Hello');
// console.log('Hi');

// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500);
// }

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);
// console.log('Hello!');
// console.log('Hi!');

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
console.log("Hello!");
console.log("Hi!");


