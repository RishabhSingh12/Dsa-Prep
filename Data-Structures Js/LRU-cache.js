//implementation of Lru cache

class LRU {
  constructor(maxSize = 5) {
    this.max = maxSize;
    this.cache = new Map();
  }

  getkey(key) {
    let item = this.cache.get(key);

    //if item value exists then delete the key and place it to the front
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  setKey(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.max) {
      this.cache.delete(this.first());
    }

    //add after removing the first value from keyu
    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }
}

//testing the implementation
const LruCache = new LRU(3);

LruCache.setKey("name", "Rishabh");
LruCache.setKey("age", "25");
LruCache.setKey("profession", "Engineer");
console.log(LruCache.cache);
LruCache.getkey("name");

console.log(LruCache.cache);

//setting new key value pair
LruCache.setKey("location", "Gurgaon");
console.log(LruCache.cache);
