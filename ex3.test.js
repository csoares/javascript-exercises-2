let Rectangle = require("./ex3.js");


test('Create Rectangles', () => {
    let rect1 = new Rectangle(2, 4);

    expect(rect1.height).toBe(2);
    expect(rect1.width).toBe(4);
    expect(rect1.area()).toBe(8);
    expect(rect1.perimeter()).toBe(12);

});

test('Test create invalid rectangle', () => {
    let rect2 = new Rectangle(0, 0);
    expect(rect2.height).toEqual(undefined);
    expect(rect2.width).toEqual(undefined);

})