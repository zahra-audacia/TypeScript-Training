// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

export function steps(count: number): any {
    let result = 0
    if (count < 0) {
        return 'Only positive numbers are allowed'
    }
    else {
        while (count !== 1) {
            if (count % 2 === 0) {
                count = count / 2
                // console.log(count)
                result += 1
            } else if (count % 2 === 1) {
                count = (count * 3) + 1
                // console.log(count)
                result += 1
            } 
            // console.log(count !== 1)
        }
    }

    return result
}
console.log(steps(16)) // 4 
console.log(steps(1)) // 0
console.log(steps(12)) // 9
console.log(steps(-15)) // error