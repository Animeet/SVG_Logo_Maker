const Shape = require("./Shape.js");

class Triangle extends Shape {

    render() {
        return `<svg height="500" width="500">
        <polygon points="250,0 0,500 500,500" fill="${this.color}" />
        <text fill="white" font-size="75" x="172" y="250">${this.text}</text>
     </svg>`
    }
}

module.exports = Triangle;

// const myTriangle = new Triangle("orange", "ABC")
// myTriangle.setText("XYZ")
// console.log(myTriangle)

// const svg = myTriangle.render();
// console.log(svg)