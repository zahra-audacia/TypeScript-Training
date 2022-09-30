export function convert(input: number ): string {
    let result: string = ''
          if (input % 3 === 0)
          {
            result += 'Pling'
          }
          if (input % 5 === 0)
          {
            result += 'Plang'
          }
          if (input % 7 === 0)
          {
            result += 'Plong'
          }
          if (result.length < 1)
          {
            return input.toString()
          }
          return result 
         
  }

  console.log(convert(3))