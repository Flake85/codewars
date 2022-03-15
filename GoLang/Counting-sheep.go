// https://www.codewars.com/kata/54edbc7200b811e956000556

package kata

func CountSheeps(numbers []bool) int {
  count := 0
  for _, s := range numbers {
    if(s) { count++ }
  }
  return count
}