
enum colours {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
}


export function decodedResistorValue(resistors: string[]): any {
    let result = ''
    for (let i = 0; i < 2; i++) {
        // console.log(resistors[i]);
        let element = (colours as any)[resistors[i]]
        result += element.toString()
    }

    // console.log(result)
    let zeroes = (colours as any)[resistors[2]]
    // console.log(typeof zeroes)
    result += '0'.repeat(zeroes)
    if (+result > 1000) {
        return `${+result / 1000} kiloohms`
    }
    else {
        return `${result} ohms`
    }

}


console.log(decodedResistorValue(['orange', 'orange', 'black']))
console.log(decodedResistorValue(['orange', 'orange', 'red']))