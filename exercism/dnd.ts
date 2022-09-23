export class DnDCharacter {
    //field
    hitpoints: number;
    strength: number;
    dexterity: number ;
    constitution: number ;
    intelligence: number ;
    wisdom: number ;
    charisma: number ;
  
    //constructor 
    constructor (hitpoints:number, strength:number, dexterity:number, constitution: number, intelligence:number, wisdom:number, charisma:number) {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }
    
    //function

    public static roll(diceSize:number): number {
        return Math.floor(Math.random() * diceSize + 1)
    }
    public static generateAbilityScore(): number {
        const rolls = Array.from([6,6,6,6], (dice) => this.roll(dice))
        rolls.sort().shift()
        const score = rolls.reduce((acc, cur) => acc + cur)
        return score
    }  
    public static getModifierFor(abilityValue: number): number {
      let modifier = (abilityValue -10)/2 
      return Math.floor(modifier)
    }
  }

  //random roll generator of 4 rolls
  function randomDiceRoll() {

  }

console.log(DnDCharacter)