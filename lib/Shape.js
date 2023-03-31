class Shape {
    constructor(color, text) {
        this.color = color
        this.text = text;
    }

    setColor(color) {
        this.color = color
    }

    setText(text) {
        this.text = text
    }
}

module.exports = Shape;

//     render() {
//         return `
// <svg height="500" width="500">
//         <polygon points="250,60 100,400 400,400" fill=${this.color} />
//         <text fill="white" font-size="30" x="250" y="150" >${this.text}</text>
//   </svg>
//         `
    // }

// const myShape = new Shape("red", "SVG");
// console.log(myShape);

// myShape.setColor("blue")
// console.log(myShape);

// const svg = myShape.render()
// console.log(svg)



// <svg height="500" width="500">
// { <polygon points="250,60 100,400 400,400" fill=blue />
// <text fill="white" font-size="30" x="250" y="150" >SVG</text>
// </svg> }