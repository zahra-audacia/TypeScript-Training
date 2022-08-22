//Greater than >
// Less than <
// Greater than or Equal to >=
//Less than or equal to <=
//Equality ===
//Not equal !==


function isInBetween (
    n1:number, n2:number, n3:number,
): any {
    //check if n2 is between n1 and n3 and return true or false 
    if ((n3 > n1) && (n2 < n1)){ //6
        return n1 + " is between " + n2 + " and " + n3;
    } 
    if ((n1 > n3) && (n2 < n3)){ //4
        return n2 + " is between " + n3 + " and " + n1;
    }  if ((n3 > n2) && (n1 < n2)){ //1
        return n2 + " is between " + n1 + " and " + n3;
    }  if ((n2 > n3) && (n1 < n3)){ //3
        return n3 + " is between " + n1 + " and " + n2;
    }  if ((n2 > n1) && (n3 < n1)){ //5
        return n1 + " is between " + n3 + " and " + n2;
    } 
    if ((n1 > n2) && (n3 < n2)){ //2
        return n2 + " is between " + n3 + " and " + n1;
    }  
}
console.log(isInBetween(1,2,3))
console.log(isInBetween(1,3,2))
console.log(isInBetween(3,2,1))
console.log(isInBetween(3,1,2)) 
console.log(isInBetween(2,3,1))
console.log(isInBetween(2,1,3))
console.log(isInBetween(4,2,3))

    
// function that checks if number is positive or negative
function isPositive ( 
    num:number
) :any {
    if (num === 0)
        return ("I think this number is neither positive or negative :/")
    if (num > 0) 
        return ("This number is positive :) ")
    if (num < 0) 
        return ("This number is negative :(")
}

console.log(isPositive(0))
console.log(isPositive(49))
console.log(isPositive(-7))

