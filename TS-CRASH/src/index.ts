// 1. Basic Types
let id: number = 5
let company: string = "Emperor Inc"
let isPublished: Boolean = true
let x: any = "Hello"
let age: number = 30;

let ids: number[] = [1, 2, 3, 4, 5] 

ids.push(10)
let arr: any = [1, true, 'Hello']

arr.pop('Hello')

// 2. Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// 3. Tuple array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Fred'],
    [3, 'Jack'],
]

// 4. Union
let pid: string | number []
pid = [1,2]

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
// enum Direction2 {
//     Up = 'Up',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right',
// }

console.log(Direction1.Left);

enum CardinalDirection {
    North = 1,
    East,
    South,
    West,
  };

  console.log(CardinalDirection.South);
  
//   meal_type: "breakfast" or "lunch" or "supper" or "snack" 
enum meal_type {
    breakfast,
    lunch,
    supper,
    snack,
}
console.log(meal_type.supper);

// difficulty_level: "Beginner" or "Intermediate" or "Advanced"

enum difficulty_level {
    Beginner,
    Intermediate,
    Advanced,
};
console.log(difficulty_level.Advanced);


//Objects 1
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// Objects 2
type Users = {
    id: number,
    name: string
} 

const users: Users = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 2));

function addUp(x: number, y: number): number {
    return x + y
 }
 console.log(addUp(2, 3));


// VOID
function log(message: string | number): void {
    console.log(message); 
}
console.log(56);
console.log("Hello");
console.log(true);

// Interfaces --- for Objects
interface UserInterface {
    id: number,
    name: string
    age?: number //? is an option-only ppties. It won't
        //throw an error if age isn't declared below
} 

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

//Interface won't work here in replace of type
type Point = number | string
const p1: Point = 1

// Interface with function
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person{
    id: number
    name: string

    constructor() {
        console.log(123);        
    }
}
const brad = new Person()
const mike = new Person();

// GENERICS---for building reusable components


const player: {
    id: number,
    name: string
} = {
    id: 56,
    name: "go"
}

type Players = {
    id: number,
    name: string
}

const players: Players = {
    id: 45,
    name: "guy"
}



