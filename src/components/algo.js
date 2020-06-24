function triangle(n) {

  let sum = n
  while (n > 1) {
    n--
    sum += n
  }
  return sum
}

