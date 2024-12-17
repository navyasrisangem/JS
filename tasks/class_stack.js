class Stack {
   constructor() {
      this.items = [];
   }
   push(element) {
      this.items.push(element);
   }
   pop() {
      return this.items.pop();
   }
   peek() {
      return this.items[this.items.length - 1];
   }
   clear() {
      this.items.length = 0;
   }
   isEmpty() {
      return this.items.length === 0;
   }
   size() {
      return this.items.length;
   }
   print() {
      console.log(this.items.toString());
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
