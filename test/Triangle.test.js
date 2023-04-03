const Triangle = require("../lib/Triangle.js");


test("if shows as triangle", () => {
    const testColor = "red";
    const testText = "XYZ"
    const myTriangle = new Triangle(testColor, testText);

    expect(myTriangle.render()).toBe(`<svg height="500" width="500">
        <polygon points="250,0 0,500 500,500" fill="${testColor}" />
        <text fill=${this.textColor} font-size="75" x="172" y="250">${testText}</text>
     </svg>`)
})

// test