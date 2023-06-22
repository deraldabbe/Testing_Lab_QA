const functions = require('./functions')
test('returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('greeting should return the correct greeting', () => {
    expect(functions.greeting('James')).toBe('Hello, James.')
    expect(functions.greeting('Jill')).toBe('Hello, Jill.')
})

test('add should return the sum of the two numbers', () => {
    expect(functions.add(1,2)).toBe(3)
    expect(functions.add(5,9)).toBe(14)
})

describe('Math Functions', () => {
    test('add should return the sum of two numbers', () => {
        expect(functions.add(1,2)).toBe(3)
        expect(functions.add(5,9)).toBe(14)
    })
    test('multiply should return the product of the two numbers', () => {
        expect(functions.multiply(3,4)).toBe(12)
        expect(functions.multiply(2,5)).toBe(10)
    })
    test('divide should return the division of the two numbers', () => {
        expect(functions.divide(10,2)).toBe(5)
        expect(functions.divide(15,3)).toBe(5)
    })
    test('subtract should return the difference of the two numbers', () => {
        expect(functions.subtract(8,3)).toBe(5)
        expect(functions.subtract(10,7)).toBe(3)
    })
})