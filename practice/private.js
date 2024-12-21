class Product {
    #productName = "Samsung TV";
    #ReturnName() {
        return this.#productName;
    }
    Print() {
        console.log(`Name = ${this.#ReturnName()}`);
    }
}
let obj1 = new Product();
obj1.Print();
