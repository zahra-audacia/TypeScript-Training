import { addition } from "../../maths";

test('adding two positives integers', () => {
    expect(addition(2,3)).toBe(5);
})

test('adding two negatives integers', () => {
    expect(addition(-1,-1)).toBe(-2);
})

test('adding two positive decimals', () => {
    expect(addition(0.1,0.5)).toBe(0.6);
})

test('adding a negative and a positive', () => {
    expect(addition(-10,1)).toBe(-9);
})

test('adding a positive integer with a negative decimal', () => {
    expect(addition(10, -0.1)).toBe(9.9);
})