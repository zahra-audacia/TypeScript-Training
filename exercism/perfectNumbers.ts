export function classify(start : number): string {
    let total: number = 0
    for ( let i = 1; i < start; i++)
      {
        if ( start % i == 0)
        {
          total += i
        }
        else 
        {
          continue;
        }
      }
    
      if (total == start)
      {
        return "perfect"
      }
      return "abundant"
  }
  
  console.log(classify(28))