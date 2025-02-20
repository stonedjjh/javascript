/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
*/

function fiboEvenSum(n) {
  //inicializamos las variables preNum, sum y nextNum
  let preNum = 0,
    sum = 0,
    nextNum = 1;
  //Ejecutaremos el ciclo mientras la suma de preNum y nextNum sea menor o igual a n
  while (preNum + nextNum <= n) {
    let aux = nextNum;
    let fibonacci = preNum + nextNum;
    //Si el numero es par y el numero fibonacci es menor o igual a n, entonces lo sumamos
    sum += fibonacci % 2 == 0 && fibonacci <= n ? fibonacci : 0;
    nextNum += preNum;
    preNum = aux;
  }

  return sum;
}

//convertimos la funcion en un modulo para poder exportarlo y usar jest para pruebas
module.exports = fiboEvenSum;
