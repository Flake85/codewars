// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function declareWinner(fighter1, fighter2, firstAttacker) {
  let first = fighter1.name === firstAttacker ? fighter1 : fighter2
  let second = fighter1.name === firstAttacker ? fighter2 : fighter1
  
  while(fighter1.health > 0 && fighter2.health > 0) {
    second.health -= first.damagePerAttack
    if(second.health > 0) {
      first.health -= second.damagePerAttack
    } else {
      return first.name
    }
    if(first.health <= 0) return second.name
  }
}