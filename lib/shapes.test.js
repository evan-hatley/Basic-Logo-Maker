// Imports jest and the shape children classes
const {Circle, Triangle, Square} = require('./shapes');

// Set up basic testing for each shape with a background color
describe('Circle', () => {
    it('tests for a green circle', () => {
        const circle = new Circle('green');
        expect(circle.render()).toContain('fill=green');
    })

})

describe('Triangle', () => {
    it('tests for a blue triangle', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toContain('fill="blue"');
    })
})

describe('Square', () => {
    it('tests for a black square', () => {
        const square = new Square('black');
        expect(square.render()).toContain('fill="black"');
    })
})