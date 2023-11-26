class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

class circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
    }
}

class triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100,100, 0 100" fill="${this.shapeColor}">`;

    }
}

class square extends Shape {
    render() {
        return `<rect width="100" height="100" fill="${this.shapeColor}" />`;
    }
}

module.exports = {circle, triangle, square};