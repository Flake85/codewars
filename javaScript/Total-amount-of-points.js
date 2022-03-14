// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let sum = 0
  games.forEach((game, i) => {
    let x = parseInt(game[0])
    let y = parseInt(game[2])
    return x > y ? sum += 3 : x === y ? sum += 1 : sum += 0
  })
  return sum
}