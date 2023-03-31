const Shape = require("./Shape.js");

class Square extends Shape {

    render() {
        return `<svg height="500" width="500">
        <rect width="500" height="500" fill=${this.color} />
        <text fill="white" font-size="75" x="172" y="250">${this.text}</text>
       </svg>`
    }
}

module.exports = Square;

// const mySquare = new Square("green", "MIA")
// mySquare.setText("MIA")
// console.log(mySquare)

// const svg = mySquare.render();
// console.log(svg)