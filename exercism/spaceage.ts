// // enum Planets {
// //   Earth,
// //   Mars
// // }

function age(planet: string, seconds: number): any {
    //given age in seconds = * 60 seconds * 60- minuts * 24 hours * 365 days = ages in years 
    let earthYears = seconds/31536000 
    if (planet == 'Earth'){
      return earthYears;
    }
    if (planet == 'Mercury') {
      let mercuryage = earthYears*0.2408467
      return mercuryage;
    }
    if (planet === 'Venus') {
        return (earthYears*0.61519726)
    }
    if (planet ==='Mars'){
      return (earthYears*1.8808158)
    }
    if (planet === 'Jupiter'){
      return (earthYears*11.862615)
    }
     if (planet === 'Saturn'){
      return (earthYears*29.447498 )
    } 
    if (planet === 'Uranus'){
      return (earthYears*84.016846)
    }
    if (planet === 'Neptune'){
      return (earthYears*164.79132)
    }
  }
  
console.log(age('Earth', 2098423374))
console.log(age('Mars', 2098423374))
console.log(age('Venus', 2098423374))
console.log(age('Saturn', 2098423374))
console.log(age('Uranus', 2098423374))
console.log(age('Neptune', 2098423374))
console.log(age('Jupiter', 2098423374))
console.log(age('Pluto', 2098423374))

