import { a,b,c,d,e } from "./arithmetic-demos"

function multiply (
    number1: number,
    number2: number
): number {
    let newnumber1= number1*number2
    return newnumber1
}
// console.log(multiply(8,4))

function addition (
    number3: number,
    number4: number
): number {
    let newnumber2 = number3+number4
    return newnumber2
}
// console.log(addition(10,8))

function divison (
    number5: number,
    number6: number,
): number {
    let newnumber3 = number5/number6
    return newnumber3
}
// console.log(divison(50,5))

// console.log(addition(a,e))

export function increment (
    number7: number,
): number {
    let newnumber4 = number7++
    return newnumber4
}
// console.log(increment(b))

function exponentiation (
    number8: number,
    number9: number,
):  number {
    let newnumber5 = number8**number9
    return newnumber5
}
// console.log(exponentiation(5,9))

export function mod(
    number10: number,
    number11: number,
): [quotient: number, remainder: number] {
    let quotient = (number10 /number11) -((number10/number11)%1)
    let remainder = number10 % number11
    return[quotient, remainder]
}
// to fix: make the quotient not a float but the integer value (so if remainder is equal to 0, this is not necessary)
// console.log(mod(10,2))
// console.log(mod(45,4))
// console.log(mod(4.5,2))