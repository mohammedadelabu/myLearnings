"use strict";
// 1. Basic Types
let id = 5;
let company = "Emperor Inc";
let isPublished = true;
let x = "Hello";
let age = 30;
let ids = [1, 2, 3, 4, 5];
ids.push(10);
let arr = [1, true, 'Hello'];
arr.pop('Hello');
// 2. Tuple
let person = [1, 'Brad', true];
// 3. Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Fred'],
    [3, 'Jack'],
];
// 4. Union
let pid;
pid = [1, 2];
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
//Objects 1
const user = {
    id: 1,
    name: 'John'
};
const users = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// VOID
function log(message) {
    console.log(message);
}
console.log(56);
console.log("Hello");
console.log(true);
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor() {
        console.log(123);
    }
}
const brad = new Person();
const mike = new Person();
// GENERICS---for building reusable components


// PRACTICE

class Rectangular {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  console.log(Rectangular.name);
  

let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);


// 2.
  class Recta {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Recta(10, 10);
  
  console.log(square.area); // 100
  