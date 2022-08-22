function howManyTimesDividedByTwo (
    num: number 
): number {
        //use a while loop to determine how many times the passed in number can be divided by two and return that answer
    let counter = 0 
    while (num%2 === 0 && num >= 1) 
        counter += 1 
        num = num/2;
        return counter
}


console.log(howManyTimesDividedByTwo(4))
console.log(howManyTimesDividedByTwo(9))


