export function isPangram(input: string): boolean {
    let inputArr = input.toLowerCase().split("")
    let alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")

    if (inputArr.length === 0){
        return false 
    }
    for (let i = 0; i < alphabet.length; i++) {
            if (!inputArr.includes(alphabet[i])) {
                return false 
            }
         }
    return true
}

console.log(isPangram("")) // false
console.log(isPangram("perfect lower case")) // false
console.log(isPangram("the quick brown fox jumps over the lazy dog'")) //true