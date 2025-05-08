// === Interface Builder ===
class PizzaBuilder {
    reset() {}
    setDough(dough) {}
    setSauce(sauce) {}
    setTopping(topping) {}
    getResult() {}
}

// === Builder ===
class ConcretePizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.pizza = {};
    }

    setDough(dough) {
        this.pizza.dough = dough;
    }

    setSauce(sauce) {
        this.pizza.sauce = sauce;
    }

    setTopping(topping) {
        if (!this.pizza.toppings) this.pizza.toppings = [];
        this.pizza.toppings.push(topping);
    }

    getResult() {
        const result = this.pizza;
        this.reset(); // Щоб можна було зібрати нову піцу
        return result;
    }
}

// === Director ===
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }

    constructMargherita() {
        this.builder.reset();
        this.builder.setDough("thin");
        this.builder.setSauce("tomato");
        this.builder.setTopping("mozzarella");
        this.builder.setTopping("basil");
    }

    constructPepperoni() {
        this.builder.reset();
        this.builder.setDough("thick");
        this.builder.setSauce("spicy tomato");
        this.builder.setTopping("pepperoni");
        this.builder.setTopping("mozzarella");
    }
}

const builder = new ConcretePizzaBuilder();
const director = new Director();

director.setBuilder(builder);

director.constructMargherita();
const margherita = builder.getResult();
console.log("Margherita:", margherita);

director.constructPepperoni();
const pepperoni = builder.getResult();
console.log("Pepperoni:", pepperoni);

builder.reset();
builder.setDough("gluten-free");
builder.setSauce("pesto");
builder.setTopping("goat cheese");
builder.setTopping("spinach");
const customPizza = builder.getResult();
console.log("Custom Pizza:", customPizza);
