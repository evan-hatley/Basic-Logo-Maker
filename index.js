const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle, square} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters for your logo.', 
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
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape.',
    },
];

inquirer.prompt(questions)
.then((resonse) => {

}

)




