import { division } from "../../maths";

test('divide two positives', () => {
    expect(division(25,5)).toBe(5);
})

test('divide two negatives', () => {
    expect(division(-25, -5)).toBe(5);
})

test('divide a negative and a positive', () => {
    expect(division(-25, 5)).toBe(-5)
})

test('divide a decimal into an integer', () => {
    expect(division(10, 0.5)).toBe(20);
})

test('divide a decimal by an integer', () => {
    expect(division(0.5,2)).toBe(0.25);
})

test('divide a decimal and a decimal', () => {
    expect(division(0.5,0.25)).toBe(2);
})

test('divide the the number by itself', () => {
    expect(division(20,20)).toBe(1);
})