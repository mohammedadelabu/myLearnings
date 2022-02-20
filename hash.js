function hashFunction(key, indexSize) {
    let asciiCount = 0;
    for (let i = 0; i < key.length; i++) {
        let currentChar = key[i];
        let asciiCode = currentChar.charCodeAt()
        asciiCount += asciiCode
    }
    return asciiCount % indexSize
}
console.log(hashFunction('stanley Okereke', 2));
console.log(hashFunction('Stanley Okerek', 2));
console.log(hashFunction('Stanle Okere', 2));


function HashTable(indexSize) {
    this.table = Array(indexSize);
    this.size = 0;

    this.hash = (key) => {
        if(!key && typeof key === 'string') {
            return console.log('invalid key');
        }
        let asciiCount = 0;
        for (let i = 0; i < key.length; i++) {
            let currentChar = key[i];
            let asciiCode = currentChar.charCodeAt();
            asciiCount += asciiCode
        }
        return asciiCount % indexSize
    }
    this.set = (key, value) => {
        const index = this.hash(key);
        // this.table[index] = [key, value]
        // return true
        if(this.table[index]){
            const key_values = this.table[index]
            //check if the key exists
            const key_value_exist = key_values.find(key_valueArr => key_valueArr[0] == key);
            if(key_value_exist) {
                key_value_exist[1] = value
            } else {
                // key does not exist, add new value
                key_values.push([key, value])
            }
        } else {
            this.table[index] = [[key, value]]
        }
    }
    this.get = (key) => {
        const index = this.hash(key);
        const value = this.table[index][1]
        return value
    }
    this.display = () => {
        console.log(this.table);
    }
}
const hashtable = new HashTable(2)
hashtable.set('kayode', 'Node')
hashtable.set('mangoo', 'Java')
hashtable.set('name', 'Java')
hashtable.set('mane', 'Java')

console.log(hashtable.get('name'));
// hashtable.display()
