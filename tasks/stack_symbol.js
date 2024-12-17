let _items = Symbol();
class Stack {
  constructor() {
    this[_items] = [];
  }
  push(element) {
    this[_items].push(element);
  }
  pop() {
    return this[_items].pop();
  }
  peek() {
    return this[_items][this[_items].length - 1];
  }
  clear() {
    this[_items].length = 0;
  }
  isEmpty() {
    return this[_items].length === 0;
  }
  size() {
    return this[_items].length;
  }
  print() {
    console.log(this[_items].toString());
  }
}
let obj = new Stack();
obj.push("A");
obj.push("B");
obj.push("C");
obj.print();
console.log(obj.pop());
console.log(obj.peek());
obj.clear();
console.log(obj.isEmpty());
console.log(obj.size());
console.log(obj.items);
