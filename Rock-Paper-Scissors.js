// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  var getMsg = (x) => { return x == 1 ? 'Player 1 won!' : 'Player 2 won!' };
  
  if (p1 === 'rock' && p2 === 'scissors') {
    
    return getMsg(1)
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return getMsg(1)
  } else if (p1 === 'paper' && p2 === 'rock') {
    return getMsg(1)
  } else if (p1 === 'scissors' && p2 === 'rock') {
    return getMsg(2)
  } else if (p1 === 'paper' && p2 === 'scissors') {
    return getMsg(2)
  } else if (p1 === 'rock' && p2 === 'paper') {
    return getMsg(2)
  } else {
    return 'Draw!'
  }
};