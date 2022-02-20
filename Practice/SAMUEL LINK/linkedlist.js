class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = this.tail = head
    }
    prepend(value) {
        const node = new Node(value)
    }
}