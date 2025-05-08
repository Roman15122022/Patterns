class Color {
    applyColor() {
        throw new Error("Method 'applyColor()' must be implemented.");
    }
}

class RedColor extends Color {
    applyColor() {
        return "red";
    }
}

class BlueColor extends Color {
    applyColor() {
        return "blue";
    }
}

class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Circle extends Shape {
    draw() {
        console.log(`Drawing a ${this.color.applyColor()} circle`);
    }
}

class Square extends Shape {
    draw() {
        console.log(`Drawing a ${this.color.applyColor()} square`);
    }
}


const red = new RedColor();
const blue = new BlueColor();

const redCircle = new Circle(red);
const blueSquare = new Square(blue);
const redSquare = new Square(red);

redCircle.draw();     // Drawing a red circle
blueSquare.draw();    // Drawing a blue square
redSquare.draw();     // Drawing a red square
