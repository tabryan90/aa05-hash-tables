class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {

    let load = this.count / this.capacity;

    if ( load >= 0.7 ) this.resize();

    const index = this.hashMod(key);

    let currentPair = this.data[index];

    // iteration to check if same key already exists
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      // if truthy, the same key exists so update value
      currentPair.value = value;
    } else {
      // equivalent to add to head for a linked list
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }

      this.count++;
    }
  }

  read(key) {
    const index = this.hashMod(key);
    let curr = this.data[index];

    while(curr) {
      if ( curr.key === key ) {
        return curr.value;
      }
      curr = curr.next;
    }

    return undefined;
  }

  resize() {

      let oldData = this.data
      let newSize = this.capacity * 2
      let newData = new Array(newSize).fill(null);

      oldData.forEach(el => {
        if ( el ) {


          for( let key in el ) {
            let index = this.hashMod(key)
            newData[index] = val;

          }
          // el.forEach(([key, val]) => {


          // });
      }
      });


      // for (let i = 0; i < oldData.length; i++ ) {
      //   let el = oldData[i]
      //   if ( el ) {
      //     newData[i] = el;
      //   } else {
      //     newData[i] = null;
      //   }
      // }

      this.capacity = newSize;
      this.data = newData;

    // console.log(this.data)

    //create newData array based on doubling old capacity
    //iterate through oldData and place into newData

  }


  delete(key) {
    // Your code here
  }
}

hashTable = new HashTable(4);

hashTable.insert("key1", "value1");
hashTable.insert("key2", "value2");
hashTable.insert("key3", "value3");

hashTable.resize();




module.exports = HashTable;
