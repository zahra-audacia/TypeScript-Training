export class Triangle { 
    a: number;
    b: number;
    c: number;

    constructor(...sides: number[]) {
        this.a = sides[0],
        this.b = sides[1],
        this.c = sides[2]
    }   
  triangleInequality(): boolean {
    return (
    this.a + this.b <= this.c ||
    this.a +this.c <= this.b ||
    this.b + this.c <= this.a 
    )
  }
  
    get isEquilateral(): boolean {
        return (!this.triangleInequality() && this.a === this.b && this.b === this.c)
    }
  
    get isIsosceles(): boolean {
        return(!this.triangleInequality() && (this.a === this.b || this.a === this.c || this.b === this.c))
    }
  
    get isScalene(): boolean {
        return (!this.triangleInequality() && !this.isEquilateral && !this.isIsosceles)
    }
  }