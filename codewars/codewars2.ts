// export function doubleChar(str: string): string{
// let output= ""
// for (let i = 0; i < str.length; i++) {
//     output = output + (str[i] + str[i])
// }
// return  output 
// }
//   //repeat every letter twice -  hello =  hheelllloo 

//   console.log(doubleChar("hello")) 

  export function twoSort(s: string[]): string {
    // a b e d c = a *** b *** c *** d *** e
    s = s.toString().split('').sort((a, b) => a < b ? -1 : 1)
 let output: string = ""
    for (let i =0; i < s.length; i++){
        output = output + (s[i] + "***")
    }
    return output
  }

  console.log(twoSort(["a, b, c, e, d"]))

// export function smallEnough(a: number[], limit: number): boolean{
//   for (let i = 0; i < a.length; i++){
//     if (a[i] > limit) {
//       return false
//     }
//   } return true 
// }

// console.log(smallEnough([3,9,33,59], 80))
// console.log(smallEnough([3,9,33,59], 40))
