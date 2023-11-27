// Created the parent class of shape and the constructor to polymorph children classes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    renderText() {
        return `<text x="50" y="50" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central"> ${this.text}</text>`;
    }
};
// The extends and super() are used to polymorph these children classes with the shape parent class data
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
    
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`;

    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<rect width="100" height="100" fill="${this.shapeColor}" />`;
    }
}
// Exported the 3 children classes since they already have the parent class properties
module.exports = {Circle, Triangle, Square};