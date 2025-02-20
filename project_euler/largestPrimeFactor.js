function largestPrimeFactor(n) {
  let factor = 2;
  while (n > 1) {
    if (n % factor === 0) {
      n /= factor;
    } else {
      factor++;
    }
  }
  return factor;
}

module.exports = largestPrimeFactor;
