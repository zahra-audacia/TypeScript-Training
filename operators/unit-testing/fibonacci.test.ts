import { fibonacci } from "../fibonacci";

test('the first 10 numbers of the fibonacci sequence', () => {
    expect(fibonacci(10)).toEqual([0,1,1,2,3,5,8,13,21,34,55])
})