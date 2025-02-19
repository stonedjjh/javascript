"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

escribeTras2Segundos('texto1', function() {
  console.log('fin1');
  escribeTras2Segundos('texto2', function() {
    console.log('fin2');
  });
});


