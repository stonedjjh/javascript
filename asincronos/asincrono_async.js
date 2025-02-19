"use strict";

var async = require('async');

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie

// llamar a una función con un array en serie,
// al finalizar llamar al callback de finalización

var lista = [1, 2, 'tres', 4, 5];

async.eachSeries(lista, escribeTras2Segundos, function(){
  console.log('he terminado');
});