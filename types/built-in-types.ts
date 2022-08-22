var age: number = 21;
console.log(age)
age = 30
console.log(age)
var typeOfJumper: string = "purple adidas";
var areYouHungry: boolean = true;
var space: void;
var maybe:null;
var message; 

let Carsowned: number = 10;
let userName: string = "Zahra";
let something: boolean = false;
let empty: void ;
let nothing: null;
let relationship;

const myName: string = "Zahra Khan"
const dissapointment: boolean = true;
const happiness = null;

let dateVariable: Date = new Date(12,12);
console.log(dateVariable)

const mod =function (
    dividend: number,
    divisor: number
): [quotient: number, remainder: number] {
    let quotient: number =  dividend / divisor;
    let remainder: number = dividend % divisor;

    return[quotient, remainder];
}

console.log(mod(55,4))