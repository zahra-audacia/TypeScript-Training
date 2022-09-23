// an armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits 
// 9 is an armstrong number because 9 = 9**1 = 9
// 10 isnt because 10 != 1**2 +0**2 = 1 
// 153 is because 153 = 1**3 + 5**3 + 3**3 = 1 + 125 + 27 = 153 

function isArmstrong ( a:number
    ) : boolean {
        let num = a.toString().split('').map(Number)
        let powerOf = num.length 
        let result = 0
        for (let i = 0; i < powerOf; i++) {
            result += num[i] ** powerOf
        }   
        return (result === a)
    }


console.log(isArmstrong(5)) //true
console.log(isArmstrong(10)) //false
console.log(isArmstrong(153)) //true