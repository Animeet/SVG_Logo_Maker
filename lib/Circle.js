const Shape = require("./Shape.js");

class Circle extends Shape {

    render() {
        return `<svg height="500" width="500">
        <circle cx="250" cy="250" r="250" fill=${this.color} />
        <text fill="white" font-size="75" x="172" y="250">${this.text}</text>
       </svg>`
    }
}

module.exports = Circle;

// const myCircle = new Circle("blue", "LOL")
// myCircle.setText("LOL")
// console.log(myCircle)

// const svg = myCircle.render();
// console.log(svg)