"use strict";

function creaAgente(nombre) {
  var edad = 0;
  return {
    ponNombre: function(nuevoNombre) {
      nombre = nuevoNombre;
    },
    leeNombre: function() {
      return nombre;
    },
    ponEdad: function(nuevaEdad) {
      edad = nuevaEdad;
    },
    leeEdad: function() {
      return edad;
    },
    escribe: function() {
      console.log('Soy ' + nombre + ' y tengo ' + edad + ' años');
    }
  }
}

// creamos agentes
var smith = creaAgente('Smith');
smith.ponEdad(33);

var jones = creaAgente('Jones');
jones.ponEdad(42);

console.log(smith.leeNombre() + ' ' + smith.leeEdad());
console.log(jones.leeNombre() + ' ' + jones.leeEdad());

setTimeout(smith.escribe, 1000);