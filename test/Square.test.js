const Square = require("../lib/Square");


test("If shows as Square", () => {
    const testColor = "green";
    const testText = "MIA"
    const mySquare = new Square(testColor, testText);

    expect(mySquare.render()).toBe(`<svg height="500" width="500">
    <rect width="500" height="500" fill=${this.color} />
    <text fill="white" font-size="75" x="172" y="250">${this.text}</text>
   </svg>`)
})