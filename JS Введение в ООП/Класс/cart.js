class Cart {
    constructor() {
        this.items = [];
    }
    addItem(good, count) {
        const {name, price} = good;
        this.items.push({name, price, count});      
    }
    getItems() {
        return this.items;
    }
    getCost() {
        return this.items.reduce(((acc, n) => acc + (n.price * n.count)), 0);
    }
    getCount() {
        return this.items.reduce(((acc, n) => acc + n.count), 0);
    }
}

const cart = new Cart();
console.log(cart.getItems().length);
cart.addItem({ name: 'car', price: 3 }, 5);
console.log(cart);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems());
console.log(cart.getCount());




// BEGIN
export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(good, count) {
      this.items.push({ good, count });
    }
  
    getItems() {
      return this.items;
    }
  
    getCount() {
      return _.sumBy(this.items, (item) => item.count);
    }
  
    getCost() {
      return _.sumBy(this.items, (item) => item.good.price * item.count);
    }
  }
// END

