// function fibonacci10(
//     num: number
// ):any {
//     //nth term counter 
//     let n1 = 0, n2 = 1, nextTerm;
//     let  i = 1;
//      if (i < num)
//         i++
//     while (i <= num) {
//         nextTerm = n1 +n2
//         n1=n2
//         n2 = nextTerm
//         console.log("Fibonacci series: " + n1 + n2 + nextTerm)
//     }
// }


let i =1 
let fib = [0,1]

for (i = 2; i < 10; i++) {
    const nextNumberInSequence = fib[i-2]+fib[i-1];
    fib.push(nextNumberInSequence);
}

console.log(fib)