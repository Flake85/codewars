// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  var min = Math.min(...numbers);
  const mutate = [...numbers]
  mutate.splice(mutate.indexOf(min), 1)
  return mutate
}