import { a,b,c,d,e } from "./arithmetic-demos"

export function multiply (
    number1: number,
    number2: number
): number {
    let newnumber1= number1*number2
    return newnumber1
}
// console.log(multiply(8,4))

export function addition (
    number3: number,
    number4: number
): number {
    let newnumber2 = number3+number4
    return newnumber2
}
// console.log(addition(10,8))

export function subtraction (
    firstNumber: number, secondNumber:number 
): number {
    let result = firstNumber - secondNumber
    return result 
}

export function division (
    number5: number,
    number6: number,
): number {
    let newnumber3 = number5/number6
    return newnumber3
}

export function increment (
    number7: number,
): number {
    
     number7++;
     return number7;
}

//console.log(increment(5))

export function decrement (
    number100: number,
): number {
    
     number100--;
     return number100;
}


export function exponentiation (
    number8: number,
    number9: number,
):  number {
    let newnumber5 = (number8)**(number9);
    return newnumber5
}


export function mod(
    number10: number,
    number11: number,
): [quotient: number, remainder: number] | string {
    let quotient = (number10 /number11) -((number10/number11)%1)
    let remainder = number10 % number11
    
    if (quotient < 0 )
    {
        quotient = quotient * (-1);
    }
    if (remainder < 0) 
    {
        remainder = remainder * (-1);
    }
    if (Number.isInteger(number10) && Number.isInteger(number11) && number10 > 0 && number11 > 0)
    {
        return[quotient, remainder];
    }
    else 
    {
        return "numbers have to be positive integers";
    }
}

console.log(mod(-25, 5));
console.log(mod(-4, 0.5));
console.log(-25 % 0)