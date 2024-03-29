const Shape = require("./Shape.js");

class Square extends Shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;

// const mySquare = new Square("green", "MIA")
// mySquare.setText("MIA")
// console.log(mySquare)

// const svg = mySquare.render();
// console.log(svg)