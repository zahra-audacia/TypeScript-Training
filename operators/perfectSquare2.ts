// using to the power of 0.5 to get the same result of a square root (doesnt work)

function isPerfectSquare2 (
    num:number,
): boolean {
    let j = ((num**(0.5))%1);
    if (j === 0) {
        return true
    }
    else {
        return false
    }
}


console.log(isPerfectSquare2(55)) //returns false  also returns 0.5 for j, should return 0.4
console.log(isPerfectSquare2(25)) //returns false when it should return true also returns 0/5 for j when it should return 0


// importing my mod function and checking that the remainder == 0, return true, else return false 
import {mod} from "./maths"
export function isPerfectSquare2v2 (
    num1:number, 
): boolean {
    // mod(num) returns [quotient, remainder]
    let [qu, rem] = mod(num1**0.5, 1);   
    if (rem === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isPerfectSquare2v2(25))
console.log(isPerfectSquare2v2(55))
