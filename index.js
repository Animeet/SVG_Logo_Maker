const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo');

const questions = [
    // WHEN I am prompted for a shape
    // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
        type: "list",
        message: "What shape did you want the svg to be?",
        name: "shape",
        choices: [
            "Triangle",
            "Square",
            "Circle"
        ]
    },
    // WHEN I am prompted for the shape's color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    {
        type: "input",
        message: "What color would you like the shape to be?",
        name: "shape_color"
    },
    // WHEN I am prompted for text
    // THEN I can enter up to three characters
    {
        type: "input",
        message: "Please type in a character-set of 3 letters.",
        name: "text"
    },
    // WHEN I am prompted for the text color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "text_color"
    },
];


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }
        // AND the output text "Generated logo.svg" is printed in the command line
        console.log('Generated logo.svg');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();


// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered