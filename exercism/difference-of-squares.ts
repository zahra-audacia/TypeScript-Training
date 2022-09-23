export class Squares {
    n: number
    constructor(n:number) {
        this.n = n
    }

    get sumOfSquares(): number {
        let sum1 = 0
        for (let i = this.n; i >= 1; i--) {
            sum1 += i ** 2
        }
        console.log(sum1)
        return sum1
    }

    get squareOfSum(): number {
        let sum2 = 0
        for (let i = this.n; i >= 1; i--) {
            sum2 += i
        }
        console.log(sum2**2)
        return sum2 ** 2
        
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}

const squares = new Squares(10)

console.log(squares.difference)