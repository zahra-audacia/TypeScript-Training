function xo(str: string) {
    let xCounter = 0 
    let oCounter = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'x') {
            xCounter += 1
        }
        if (str.charAt(i) === 'o') {
            oCounter += 1
        }
    }

    return xCounter === oCounter 
  }

console.log(xo('xo')) //true
console.log(xo('xx0o')) //true
console.log(xo('xxm')) //false
console.log(xo('Oo')) //false
console.log(xo('ooom')) //false




