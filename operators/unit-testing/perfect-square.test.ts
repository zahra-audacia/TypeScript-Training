import {isPerfectSquare3} from "../perfectSquare3";

//Perfect square version 3
test('25 is a perfect square', () => {
    expect(isPerfectSquare3(25)).toBeTruthy();
})

test('12 is not a perfect square', () => {
    expect(isPerfectSquare3(12)).toBeFalsy();
})

test('test a negative integer', () => {
    expect(isPerfectSquare3(-4)).toBeFalsy();
})

test('test a decimal', () => {
    expect(isPerfectSquare3(8.8)).toBeFalsy();
})