import { decrement } from "../../maths";

test('a positive integer', () => {
    expect(decrement(5)).toBe(4);
})

test('a negative integer', () => {
    expect(decrement(-6)).toBe(-7);
})

test('a positive decimal', () => {
    expect(decrement(0.5)).toBe(-0.5);
})

test('a negative decimal', () => {
    expect(decrement(-0.5)).toBe(-1.5);
})