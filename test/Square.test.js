const Square = require("../lib/Square");


test("If shows as Square", () => {
    const testColor = "green";
    const testText = "MIA";
    const testTextColor = "white";
    const mySquare = new Square(testColor, testText, testTextColor);

    expect(mySquare.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="${testColor}"/>
        <text fill="${testTextColor}" font-size="75" x="172" y="250">${testText}</text>
        </svg>`)
})