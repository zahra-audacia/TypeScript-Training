import { multiply } from "../../maths";

test('multiplying two positive integers', () => {
    expect(multiply(2,5)).toBe(10);
})

test('multiplying a positive integer and a negative integer', () => {
    expect(multiply(10, -1)).toBe(-10);
})

test('multiplying two negative integers', () => {
    expect(multiply(-5, -5)).toBe(25);
})

test('multiplying two positive decimals', () => {
    expect(multiply(0.5, 0.5)).toBe(0.25);
})

test('multiplying a integer and a decimal', () => {
    expect(multiply(5,0.5)).toBe(2.5);
})
