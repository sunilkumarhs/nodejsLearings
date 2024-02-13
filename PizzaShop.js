const eventEmitter = require("node:events");

class PizzaShop extends eventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("OrderPizza", size, topping);
  }

  displayNumberOfOrders() {
    console.log("Number of Orders: " + this.orderNumber);
  }
}

module.exports = PizzaShop;
