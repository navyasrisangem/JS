function Stack() {
    let items = [];
    this.push = function (element) {
        items.push(element);
    }
    this.pop = function () {
        return items.pop();
    }
    this.peek = function () {
        return items[items.length - 1];
    }
    this.clear = function () {
        items.length = 0; //items=[]
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}
let obj1 = new Stack();
obj1.push("A");
obj1.push("B");
obj1.print();
console.log(obj1.pop());
console.log(obj1.peek());
obj1.clear();
console.log(obj1.isEmpty());
console.log(obj1.size());
obj1.print();



