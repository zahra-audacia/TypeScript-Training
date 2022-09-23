// export const digitize = (n: number): number[] => {
//     var str = String(n);
//     return str.split('').map(Number).reverse()
//   };

//   console.log(digitize(348597))

// export function divisibleBy(numbers: number[], divisor: number): number[]{
//     let output: number[] = []
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % divisor === 0) {
//         output.push(numbers[i])
//       }
//     } 
//     return output 
//   } 

//   console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2 ))

export function getSum(a: number, b: number): number {
    let array = [a,b]
    for (let i = 0; i < array.length;  )
  

      // for 2,5 = 2+3+4+5 = 11
  console.log(getSum(3,2))
  console.log(getSum(2,2))
  console.log(getSum(-1,2))