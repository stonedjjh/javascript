function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

function largestPalindromeProduct(n) {
  let number = "9".repeat(n);
  let numbers = Array.from({ length: 2 }, (_, i) => number);
  let exit = false;
  let product;
  let numbersString = numbers.join("");
  let maxPalindrome = 0;
  let length = numbers.length;
  let regex = new RegExp(`.{1,${n}}`, "g");
  while (!exit) {
    product = 1;
    let aux = numbersString.match(regex);
    aux.forEach((element) => {
      if (element != 0) product *= parseInt(element);
    });
    isPalindrome(product) && product > maxPalindrome
      ? (maxPalindrome = product)
      : null;
    numbersString--;
    if (numbersString == 0) exit = true;
    numbersString = numbersString.toString();
  }
  return maxPalindrome;
}

module.exports = largestPalindromeProduct;
