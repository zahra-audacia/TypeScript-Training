import { mod } from "../../maths";

test('positive integers that have no remainder', () => {
    expect(mod(40,5)).toEqual([8,0]);
})

test('positive integers that have a remainder', () => {
    expect(mod(20,3)).toEqual([6,2])
})


test('a negative number mod a positive integer with a remainder', () => {
    expect(mod(-25, 4)).toMatch("numbers have to be positive integers")
})

test('positive integer mod a  decimal', () => {
    expect(mod(4, 0.5)).toMatch("numbers have to be positive integers");
})

test(' a positive number mod a negative number', () => {
    expect(mod(25, -5)).toMatch("numbers have to be positive integers")
})