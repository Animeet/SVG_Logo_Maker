const Circle = require("../lib/Circle");


test("If shows as Circle", () => {
    const testColor = "blue";
    const testText = "LOL"
    const myCircle = new Circle(testColor, testText);

    expect(myCircle.render()).toBe(`<svg height="500" width="500">
    <circle cx="250" cy="250" r="250" fill=${this.color} />
    <text fill="white" font-size="75" x="172" y="250">${this.text}</text>
   </svg>`)
})