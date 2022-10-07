import { exponentiation } from "../../maths";

test('a positive integer to the power of a positive integer', () => {
    expect(exponentiation(5,2)).toBe(25);
})
test('a positive integer to the power of a positive decimal', () => {
    expect(exponentiation(25,0.5)).toBe(5);
})

test('a positive integer to the power of a negative integer', () => {
    expect(exponentiation(5,-2)).toBe(0.04);
})

test('a negative integer to the power of a positive integer', () => {
    expect(exponentiation(-5,2)).toBe(25);
})

test('a negative integer to the power of a negative integer', () => {
    expect(exponentiation(-5,-2)).toBe(0.04);
})