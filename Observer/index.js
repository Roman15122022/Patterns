class Subscriber {
    update(data) {
        throw new Error("Method 'update' must be implemented");
    }
}

class Store {
    constructor() {
        this.subscribers = [];
        this.productAvailable = false;
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notify(productName) {
        for (let subscriber of this.subscribers) {
            subscriber.update(productName);
        }
    }

    newProductAvailable(productName) {
        this.productAvailable = true;
        console.log(`Магазин: новий товар "${productName}" доступний!`);
        this.notify(productName);
    }
}

class Customer extends Subscriber {
    constructor(name) {
        super();
        this.name = name;
    }

    update(productName) {
        console.log(`${this.name} отримав сповіщення: товар "${productName}" тепер у наявності.`);
    }
}

const store = new Store();

const customer1 = new Customer("Олена");
const customer2 = new Customer("Ігор");

store.subscribe(customer1);
store.subscribe(customer2);

store.newProductAvailable("PlayStation 6");

store.unsubscribe(customer2);

store.newProductAvailable("iPhone 17");
