/*Guión
Has empezado a organizar los cuadros que tienes en casa y has decidido hacer un inventario de 
algunos de los más importantes. Declara una serie de objetos que se corresponderán con las siguientes
 imágenes: 
 Mona Lisa (Leonardo da Vinci, 1503), 
 La última cena (Leonardo da Vinci, 1495), 
 La noche estrellada (Vincent van Gogh, 1889), 
 El grito (Edvard Munch, 1893), 
 El Guernica (Pablo Picasso, 1937), 
 El beso (Gustav Klimt, 1907), 
 La joven de la perla (Johannes Vermeer, 1665), 
 El nacimiento de Venus (Sandro Botticelli, 1485), 
 Las meninas (Diego Velázquez, 1656), 
 La creación de Adán (Miguel Ángel, 1512).
*/

let ColoredPoint = function (x, y, color) {
  let _info = "... object under construction";
  let _color = color;
  console.log(_info);

  this.x = x;
  this.y = y;
  this.getColor = function () {
    return _color;
  };
};

const Obra = function (nombre, autor, año) {
  this.nombre = nombre;
  this.autor = autor;
  this.año = año;
  this.info = function () {
    return `${this.nombre} (${this.autor}, ${this.año})`;
  };
};

const obras = [];
obras.push(new Obra("Mona Lisa", "Leonardo da Vinci", 1503));
obras.push(new Obra("La última cena", "Leonardo da Vinci", 1495));
obras.push(new Obra("La noche estrellada", "Vincent van Gogh", 1889));
obras.push(new Obra("El grito", "Edvard Munch", 1893));
obras.push(new Obra("El Guernica", "Pablo Picasso", 1937));
obras.push(new Obra("El beso", "Gustav Klimt", 1907));
obras.push(new Obra("La joven de la perla", "Johannes Vermeer", 1665));
obras.push(new Obra("El nacimiento de Venus", "Sandro Botticelli", 1485));
obras.push(new Obra("Las meninas", "Diego Velázquez", 1656));
obras.push(new Obra("La creación de Adán", "Miguel Ángel", 1512));

obras.forEach((element) => {
  console.log(element.info());
});
