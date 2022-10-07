import { increment } from "../../maths";

test('a positive integer', () => {
    expect(increment(5)).toBe(6);
})

test('a negative integer', () => {
    expect(increment(-6)).toBe(-5);
})

test('a positive decimal', () => {
    expect(increment(0.5)).toBe(1.5);
})

test('a negative decimal', () => {
    expect(increment(-0.5)).toBe(0.5);
})