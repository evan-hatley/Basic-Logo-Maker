// Import modules to the index. Make sure to use a version of inquirer before 9.0.0 for it to properly install and render
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
// Created the array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters for your logo.', 
        validate: input => input.length <= 3 ? true : "Please enter up to three characters.",
    },
    {
    type: 'input',
    name: 'textColor',
    message: 'Enter the color for the text.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape.',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape.',
    },
];
// Found out about switch cases form W3 Schools, which made this block of code so much easier to write than === statements for each class of shape
inquirer.prompt(questions)
.then((response) => {
    let shape;
    switch (response.shape) {
    case 'Circle':
        shape = new Circle(response.text, response.textColor, response.shapeColor);
        break;
    case 'Triangle':
        shape = new Triangle(response.text, response.textColor, response.shapeColor);
        break;
    case 'Square':
        shape = new Square(response.text, response.textColor, response.shapeColor);
        break;
    }

// Takes the user responses and outputs them into the svgContent which will be initalized into an svg file
 const svgContent = createSvg(shape, response);
 fs.writeFile('output.svg', svgContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Generated logo.svg');
    }
})

// Used template literals and JSON to render the shape and text from svgContent
function createSvg(shape) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                ${shape.renderText()}
            </svg>`;
}
})