'use strict';

var casa = {
  ventanas: 2,
  cuantasVentanas: function() {
    console.log('la casa tiene ' + this.ventanas + ' ventanas');
  }
};

function Coche() {
  this.ruedas = 4;
  this.cuantasRuedas = function() {
    console.log('el coche tiene ' + this.ruedas + ' ruedas');
  }
}

casa.cuantasVentanas();

setTimeout(casa.cuantasVentanas.bind(casa), 1000);

var coche = new Coche();

coche.cuantasRuedas();

setTimeout(coche.cuantasRuedas.bind(coche), 1000);