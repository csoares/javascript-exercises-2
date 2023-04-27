let swapCase = require("./ex1.js");


test('Test Swap Case', () => {

    expect(swapCase("aBcD")).toBe("AbCd");

})

test('Test invalid arguments', () => {

    expect(swapCase(3)).toBeUndefined();
    expect(swapCase({})).toBeUndefined();
})