


function logic(
    a:number, 
    b: number,
    c: number,
): string {
    if ((b === c) || (a===b) || (a===c)) {
        return "please give unique numbers"
    } 
    else if ((a > b) && (a > c)) {
        return a + " is the largest"
    }
    else if ((b > a ) && (b > c)) {
        return b + " is the largest"
    }
    else {
        return c + " is the largest"
    }
}


console.log(logic(1,2,3)) // correct
console.log(logic(3,2,1)) //correct
console.log(logic(1,3,2)) // correct
console.log(logic(3,3,4)) // was saying give unique but i changed 
