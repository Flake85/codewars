package kata

func CountSheeps(numbers []bool) int {
  count := 0
  for _, s := range numbers {
    if(s) { count++ }
  }
  return count
}