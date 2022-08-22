function findValue (
    input: number
): any {
    let array  = [1,2,3,5,8,13,21,34]

    // iterate every value in the input and then iterate through every value in the array to check if they are the same
    
        for (let j=0; j<= array.length-1; j++) {
            if (array[j] === input){
                return true
            }
        }

        return false
        
        // if (input[i] in array)
        //     return true
        // else 
        //     return false 
        // }
}

console.log(findValue(2))
console.log(findValue(5))
console.log(findValue(6))
console.log(findValue(9))

function findValues (
    input: number[]
): boolean[] {
    let array  = [1,2,3,5,8,13,21,34]
    let res: boolean[] = [];
    // iterate every value in the input and then iterate through every value in the array to check if they are the same
    for (let i = 0; i <= input.length -1; i++) {
        const inp: number = input[i]

        for (let j=0; j<= array.length-1; j++) {
            if (array[j] === inp){
                res.push(true)
            }
            res.push(false)
        }

        }
        // if (input[i] in array)
        //     return true
        // else 
        //     return false 
        // }

        return res;
}

console.log(findValues([2, 5, 6, 99]))