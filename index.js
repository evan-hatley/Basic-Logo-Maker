const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters for your logo.', 
    },
    {
    type: 'input',
    name: 'text-color',
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
        name: 'shape-color',
        message: 'Enter the color for the shape.',
    },
];





