class node {
constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
//   }
// }
// class LinkedList {
//   constructor(head, tail) {
//     this.head = this.tail = null  
//   // adds new node to the end of the list  append(value) {
//     const newNode = new Node(value);
//     if (!this.tail) {
//       this.head = this.tail = newNode;
//     } else {
//       const formerTail = this.tail;
//       this.tail = newNode;
//       formerTail.next = this.tail      
//       this.tail.prev = formerTail;
//     }
    
//   }

//   //adds new node to the front
//   propend(value) {
//   const anotherNode = new Node(value);
//   if (!this.head) {
//       this.tail = this.head = anotherNode;
//   } else {
//       const formerHead = this.head
//       this.head = newestNode
//       this.head.next = formerHead; 
//      }
//     }
// }
// const list = new LinkedList()

// list.append(0);
// list.append(1);
// list.propend(-1)
// console.log(list)

// search(value) {
//     let curr = this.head
//     while (current){

//         return null
//     } else{
//         this.value
// }
// }

let num = [0, 1, 2, 3, [[1,2]]];
num.reduce((acc, val) => acc.concat(val), []);
//  console.log(result)