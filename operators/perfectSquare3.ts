// using Math.sqrt and then multiplying it with itself and checking if the result is the same as the orginal input (doesnt work)


function isPerfectSquare3 (
    num:number,
) :boolean {
    let j = Math.sqrt(num);

    return j*j === num;
}
//     if (j*j === num) {
//         return true
//     };
//         return false
// }

console.log(isPerfectSquare3(55)) // 
console.log(isPerfectSquare3(25)) // 

//trying with ternary

// expression ? when true : when false

//can i use arrow functions with these??
