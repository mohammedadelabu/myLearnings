"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserImpl = /** @class */ (function () {
    function UserImpl(name) {
        this.users = [];
    }
    UserImpl.prototype.createUser = function (person) {
        if (!person.trim().length)
            return "getout";
        person = person.toLocaleLowerCase();
        if (!this.users.includes(person)) {
            this.users.push(person);
            return this.users;
        }
        return "user already exist";
    };
    UserImpl.prototype.deleteUser = function (index) {
        if (!this.users[index])
            return null;
        this.users.splice(index, 1);
        return this.users;
    };
    UserImpl.prototype.getUser = function (index) {
        var user = this.users[index];
        return user ? user : null;
    };
    UserImpl.prototype.getAllUsers = function () {
        var user = this.users;
        return user ? user : null;
    };
    UserImpl.prototype.countUsers = function () {
        return this.users.length;
    };
    return UserImpl;
}());
var user = new UserImpl();
var oldUserLength = user.users.length;
console.log(oldUserLength);
// const expect = 1;
user.createUser("peopple");
var newUserlength = user.users.length;
function printName(name) {
    if (name.toLocaleLowerCase() === "hello") {
        throw new Error("name is hello");
    }
    return name;
}
// assert.strictEqual(printName('wunmi'), 'wunmi')
// console.log("1st test passed")
// assert.throws(() => printName("helo"), new Error("name is hello"))
// console.log("2nd test passed")
// assert.strictEqual(printName('sunmi'), 'sunmi')
// console.log("3rd test passed")
function test(name, callBack) {
    try {
        callBack();
        console.log("test " + name + " passed \u2705");
    }
    catch (error) {
        console.log("test " + name + " falied \u274C");
        console.log(error);
    }
}
function expect(actual) {
    return {
        toBe: function (expected) {
            if (actual === expected) {
                console.log(expected + " is equal to " + actual);
                return;
            }
            throw new Error();
        },
    };
}
test("Wunmii's name get's to print", function () {
    var name = printName("Wunmii");
    expect(name).toBe(name);
});
test("Hello throw's an error", function () {
    var name = printName("hello");
    expect(name).toBe(name);
});
test("Emmanuel's name passed", function () {
    var names = ["james", "fola", "daniel"];
    var returnedNames = checkNameExist(names, "daniel;");
    expect(returnedNames).toDeeplyEqual(names);
    expect(returnedNames).toHaveElement('fola');
});
function checkNameExist(names, name) {
}