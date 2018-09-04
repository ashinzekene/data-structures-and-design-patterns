import Stack from "../Stack";

function par_check(str) {
  s = new Stack()
  bal = true
  for (ch of str) {
    if (ch === '(') {
      s.push('(')
    } else if ( ch === ')') {
      if (s.isEmpty()) {
        bal = false
        break
      } else {
        s.pop()
      }
    }
  }
  console.log(s.length)
  return s.isEmpty() && bal
}