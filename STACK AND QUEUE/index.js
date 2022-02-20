// /**
//  * IMPLEMENTATION FOR STACK
//  */

// class Stack {
//     constructor() {
//         this.data = []
//     }

//     push(value){
//         this.data.push(value)
//     }

//     pop(){
//         return this.data.pop()
//     }

//     print() {
//         //display the elements in the stack
//         let items = this.data.reduceRight((previousValue, currentValue) => {
//             return `${previousValue} -> ${currentValue}`
//         })
//         console.log(items);
//     }
// }
// const stack = new Stack();

// stack.push(2);
// stack.push(4);
// stack.push(1);
// stack.print();

/**
 * IMPLEMENTATION FOR STACK
 */

//  class Stack {
//     constructor(sizeLimit = 3) {
//         this.data = []
//         this.limit = sizeLimit
//     }

//     push(value){
//         this.data.push(value)
//     }

//     pop(){
//         if(this.data.length > 0) {

//             return this.data.pop()
//         } else {
//             console.log('Stack Underflow');
//         }
//     }

//     print() {
//         //display the elements in the stack
//         let items = this.data.reduceRight((previousValue, currentValue) => {
//             return `${previousValue} -> ${currentValue}`
//         })
//         console.log(items);
//     }

//     isEmpty(){
//         return this.data.length === 0
//     }
// }
// const stack = new Stack();

// stack.push(2);
// stack.push(4);
// stack.push(1);
// stack.print();


// QUEUE
class LinkedList {
    constructor(headValue = null){
        this.head = headValue == null ? headValue : this.createNode(headValue);
        this.tail = this.head;
        this.length = this.head === null ? 0 : 1;
    }

    createNode(nodeValue) {
        return {
            value: nodeValue,
            next: null
        }
    }
    popHead(){
        if(this.length = 0) {
            //return null if the linkedlist is empty
            return null;
        }
        let prevHead = this.head;
        this.head = prevHead.next;
        if(this.length == 1) {
            this.tail = this.head
        }
        return prevHead.value
    }

    push(value) {
        let node = this.createNode(value);
        if(this.head === null) {
            this.head = node
            this.tail = this.head;
        } else {
            let prevTail = this.tail;
            this.tail = node;
            prevTail.next = this.tail;
        }
        this.length++
    }

    print(){
        let values = []
        let currentNode = this.head;
        while(currentNode !== null) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(values.join("->"));
    }
}
class Queue {
    constructor() {
        this.data = new LinkedList()
    }
    enqueue(value) {
        this.data.push(value)
    }

    dequeue() {
        this.data.popHead()
    }
    print(){
        this.data.print()
    }
}
let q = new Queue();
q.enqueue(4)
q.enqueue(10)
q.enqueue(11)

q.print()

q.dequeue()
q.print()
// let ll = new LinkedList();
// console.log(ll.head);

// let ll3 = new LinkedList()
// ll3.push(6)

// let ll2 = new LinkedList(5);
// ll2.push(2)
// ll2.push(3)
// ll2.print()
// ll2.popHead()
// console.log(ll2.head);
// console.log(ll2.tail);
// ll2.print()

// this.data.index[0]