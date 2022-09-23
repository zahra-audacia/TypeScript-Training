const a: any = 5
console.log(typeof(a))
console.log(a instanceof String) 


function positiveAndNegative (
    a: number, b: number, 
): void {
    if (a+b < 0) {
        console.log(a + b)
    }
    if ((a + b > 0)) {
        console.log(a-b)
    }
}

function type (
    a: any, b:any,
): any {
    if (typeof a && typeof b === 'number')
        console.log(a*b)
    else 
        console.log("Not all test objects are numbers")
}

console.log('hi', 8)
console.log(type(7,9))

