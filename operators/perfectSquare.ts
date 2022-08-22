import {increment} from "./maths"

//incrementing every number to see if muliplied by itself gets the inputed number (this works!)

function isPerfectSquare(
    num:number,
): boolean {
    let j = 1;
    while (j <= num/2) {
        //console.log(j)
        if (j*j == num){
            return true;
        }
        else{
            j++
        } 
    };
    return false
}


console.log(isPerfectSquare(654))
console.log(isPerfectSquare(47))
console.log(isPerfectSquare(25))