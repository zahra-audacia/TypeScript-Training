let i**2 = -1  
// complex = a + b*i
// a: number, b:number;
// //conjugate 
// z = a -b*i

// //abs of conjugate
// absz = (a**2 + b**2)**0.5

//adding complex numbers 
function addcomplex (a:number, b:number, c: number, d:number): any {
    let complex = (a + i * b) + (c + i * d)
    complex = (a + c) + (b + d) * i
}

console.log(addcomplex(3,2,6,5))


// //subtracting complex numbers
// (a + i * b) - (c + i * d) = (a - c) + (b - d) * i

// // multiplying complex numbers
// (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i

// //recipricol of a complex number
// 1 / (a + i * b) = a/(a^2 + b^2) - b/(a^2 + b^2) * i

// //dviding a complex number
// (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i

// //exponent to the power of a complex number#
// e^(a + i * b) = e^a * e^(i * b)