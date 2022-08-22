function startCallingBingoNumbers (

): number {
    let emptyArray: number[] = [] 
    let top10Array = Array.from(Array(10).keys())
    let counter = 0 
    do {
         let randomNumber = Math.floor((Math.random())*10) + 1
         //console.log(randomNumber)

         var doesntExisit: boolean = emptyArray.indexOf(randomNumber) === -1
         //console.log(doesntExisit)
         if ( doesntExisit) {
            emptyArray.push(randomNumber) 
            counter++
        }
        else {
            counter++
        };
    }
    while (emptyArray.length < 10)
    return counter;
}
console.log(startCallingBingoNumbers())



