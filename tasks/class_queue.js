class Queue {
    constructor() {
        this.items = [];
    }
    shift(element) {
        this.items.unshift(element);
    }
    pop() {
        return this.items.shift();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items.length = 0;
    }
}
let obj = new Queue();
obj.shift("A");
obj.shift("B");
obj.shift("C");
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.size());
obj.clear();
console.log(obj.items);
