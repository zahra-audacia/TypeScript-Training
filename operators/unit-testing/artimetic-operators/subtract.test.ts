import { subtraction } from "../../maths";

test('subtracting two positives integers', () => {
    expect(subtraction(2,3)).toBe(-1);
})

test('subtracting two negatives integers', () => {
    expect(subtraction(-1,-1)).toBe(0);
})

test('subtracting two positive decimals', () => {
    expect(subtraction(0.1,0.5)).toBe(-0.4);
})

test('subtracting a negative from a positive', () => {
    expect(subtraction(10,-1)).toBe(11);
})
test('subtracting a positive from a negative', () => {
    expect(subtraction(-10,1)).toBe(-11);
})

