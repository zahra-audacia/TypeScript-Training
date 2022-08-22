// function mod(
//     a: number,
//     b: number,
// ): [quotient: number, remainder: number] {
//     let quotient =(a /b) -((a/b)%1)
//     let remainder = a % b
//     return[quotient, remainder]
// }
// 
function mod2 (
    a: number,
    b:number,
): [quot : number, rem :number] { 
    return[a/=b, a = a%b ]
}
console.log(mod2(12,5)) 

