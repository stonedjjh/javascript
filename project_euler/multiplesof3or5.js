/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3Or5(number) {
  let sum = 0;
  //comenzamos en 3 porque es el primer multiplo de 3 ó 5
  for (let i = 3; i < number; i++) {
    //si el residuo de la division de i entre 3 ó 5 es 0, entonces i es multiplo de 3 ó 5 y lo sumamos
    sum += i % 3 == 0 || i % 5 == 0 ? i : 0;
  }

  return sum;
}

module.exports = multiplesOf3Or5;
