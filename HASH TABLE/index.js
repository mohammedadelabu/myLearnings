let hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);        
    }
    return hash % max;
};

let Hashtable = function(){
    
    let storage = [];
    const storageLimit = 4;

    this.print = function(){
        console.log(storage);
    }

    this.add = function(key, value){
        let index = hash(key, storageLimit);
        if(storage[index] === undefined){
            storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if(inserted === false){
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key){
        let index = hash(key, storageLimit);
        if(storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index];
        } else {
            for(let i = 0; i < storage[index]; i++){
                if(storage[index][i][0] === key){
                    delete storage[index][i];
                }
            }
        }
    };
    this.lookup = function(key){
        let index = hash(key, storageLimit);
        if(storage[index] === undefined){
            return undefined;
        } else {
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i][1];
                }
            }
        }
    };
}

console.log(hash('beau', 10));
console.log(hash('quincy', 10));

let ht = new Hashtable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();


// function removeKthNodeFromEnd(head, k) {
//     let one = head;
//     let two = head;
//     let i = 1;
//     while(i <= k){
//       two = two.next;
//       i++
//     }
//     if(two == null){
//       head.value = head.next.value;
//       head.next = head.next.next;
//       return
//     }
//     while(two.next !== null){
//       two = two.next;
//       one = one.next;
//     }
//     one.next = one.next.next;
//   }

//   console.log(removeKthNodeFromEnd("head", "1"));