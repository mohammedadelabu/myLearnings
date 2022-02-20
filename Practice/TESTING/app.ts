import assert from 'assert/strict'

interface User {
    users: string []
    constructor(): void
    createUser(person:string): string[] | string
    deleteUser(index:number): string[] | null
    getUser(index: number): string | null
    getAllUser(): string[] | null
    countUsers(): number
}

class UserImpl implements User {
    users: string []
    constructor() {
        this.users = []
    }
    createUser(person: string) {
        if(!person.trim().length) return 'getout'
        person = person.toLocaleLowerCase()
        if(!this.users.includes(person)) {
            this.users.push(person)
            return this.users
        }
        return "user already exist"
    }
    deleteUser(index: number) {
        if(!this.users[index]) return null;
        this.users.splice(index, 1);
        return this.users
    }
    getUser(index:number){
        const user = this.users[index]
        return user ? user : null
    }
    getAllUsers(index:number){
        const user = this.users
        return user ? user : null
    }
    countUsers(){
        return this.users.length
    }
}
const user = new UserImpl();
const oldUserLength = user.users.length
console.log(oldUserLength);
const expect = 1;
user.createUser('peopple')
const newUserLength = user.users.length

assert.strictEqual(newUserLength, 1)

//if(oldUserLength !== newUserLength) {
// if(newUserLength !== oldUserLength + 1) {
//     console.log("Test passed");
// } else {
//     console.log("Test failed");
//     throw new Error("Your test failed")
// }

function printName(name:string) {
    if(name.toLocaleLowerCase === 'hello') {
        throw new Error('name is hello')
    }
    return name;
}

assert.strictEqual(printName('wunmi'), 'wunmi')
console.log('1st test passed');
assert.throws(() => printName('helo'), new Error('name is Hello'))
console.log('2nd test passed');
assert.strictEqual(printName('sunmi'), 'sunmi')
console.log('3rd test passed');

function test(name:string, callBack:()=> void | never) {
    try {
        callBack()
        console.log(`test ${name} passed`);
    } catch (error) {
        console.log(`test ${name} failed`);
        console.log(error);
    }
}

test("Wunmii's name get to print", ()=>{
    printName("Wunmii")
})
test("Wunmii's name get to print", ()=>{
    printName("hello")
})