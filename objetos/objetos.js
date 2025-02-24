//definimos un objeto con la notacion de Curly brace {} o notacion literal
//anotaion personal: en este objeto todas las propiedades son publicas
const sampleObject = {
  id: 10,
  delay: 20,
  name: "en to tre",
  "last name": "Doe", //apunte personal
  isPresent: true,
  delay: 50,
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id); // -> 10
console.log(sampleObject.name); // -> en to tre
console.log(sampleObject.delay); // -> 100

/*apuntes personales*/
console.log(typeof sampleObject); //con esta funcion podemos obterner el tipo de dato de una variable
//tambien podemos acceder a los valores de un objeto con la notacion de corchetes
console.log(sampleObject["name"]); // -> en to tre
/*pero esto se usa mas que todo para acceder a propiedad que tienen espacio en su nombre
ya que no se puede acceder a una propiedad con espacio en su nombre con la notacion de punto*/
console.log(sampleObject["last name"]); // -> Doe

const sampleObject2 = {
  id: 10,
  delay: 20,
  name: "en to tre",
  "last name": "Doe", //apunte personal
  isPresent: true,
  delay: 50,
};

//podemos declarar un objeto vacio
const contact = {};

//apunte personal: y agregarle propiedades despues
contact.name = "John Doe";
console.log(contact.name);

//apunte personal:  o un metodo
contact.fullname = function () {
  return this.name;
};

console.log(contact.fullname());

//tambien podemos eliminar una propiedad con la palabre reservada delete

delete contact.name;
console.log(contact.name);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  /*
    fullName: this.firstName + " " + this.lastName,
    la linea de arriba no funciona porque la palabra reservada this 
    no funciona como en otro lenguaje y su ambito de alcance no es el mismo
    su enlace "bind" no es hacia el objeto sino hacia el contexto de ejecucion
  */
  fullName: function () {
    /*return firstName + " " + lastName; 
          la linea de arriba no funciona porque no se esta accediendo a las propiedades del objeto*/
    //esta es la forma correcta de acceder a las propiedades de un objeto
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // -> John Doe

const person2 = {
  name: "John",
  age: 30,
  city: "New York",
  funcion: function () {
    return "mi funcion";
  },
};

//para acceder al nombre de las propiedades usamos un for (var in object)
let text = "";
for (let x in person2) {
  console.log(`propiedad y metodos obtenidos con for in ${x}`);
}

//podemos obtener los valores de los atributos y metodos tambien en un arreglo con el metodo Object.values
const myArray = Object.values(person2);
console.log(`los valores del objeto son ${myArray}`);

/*otra forma de obtener los nombre de los atributos en con el metodo Object.keys, 
esto tambien lo podemos usar para arreglos ya que los arreglos son objetos en JavaScript*/
let keys = Object.keys(person2);
console.log(`las claves son: ${keys}`);

const myArray2 = ["Perro", "Gato", "Elefante"];
keys = Object.keys(myArray2);
console.log(`las claves son: ${keys}`);

//tambien podemos usar  Object.entries() para ver las propiedades, metodos y sus valores valores
text = "";
for (let [propiedad, value] of Object.entries(person2)) {
  text += propiedad + ": " + value + "<br>";
}
console.log(text);

//o lo podemos pasar a notacion JSON, los metodos no son parseados
text = JSON.stringify(person2);
console.log(text);

//podemos preguntar si una propiedad con la palabra reservada in

if ("name" in person2) {
  console.log(
    `La propiedad name existe y tiene un valor de ${person2["name"]}` //La propiedad name existe y tiene un valor de John
  );
}

var point1 = { x: 10, y: 20 };
var point2 = { x: 10, y: 20 };
console.log(point1 === point2); //Falso

/*Esto es porque ambas referencias apuntan al mismo objeto*/
let point3 = point1;
console.log(point1 === point3); //Verdadero

/*para copiar el contenido de un objeto en otro podemos usar
Object.assign(destino, origen)*/
let point0 = { x: 10, y: 20 };
point1 = point0; // copiamos la referencioa
point2 = {};
Object.assign(point2, point0); //  copiamos la propiedad de point0 en point2
/*esto es equivalente a la linea de arriba point2 = Object.assign({}, point0);*/
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false

let circle1 = {
  radius: 100,
  center: {
    x: 100,
    y: 100,
  },
};
let circle2 = { ...circle1 };
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2); // false
console.log(circle1.center === circle2.center); // true !

//get y set
let contact2 = {
  _tel: "207-662-5412",
  get tel() {
    return this._tel;
  },
  set tel(t) {
    this._tel = t;
  },
};
console.log(contact2.tel);
contact2.tel = "100-100-1000";
console.log(contact2.tel);

//Ok ahora se pone un poco heavy
/*getOwnPropertyDescriptor es un método estático del objeto Object en 
JavaScript que te permite obtener el descriptor de una propiedad específica 
de un objeto. Un descriptor de propiedad es un objeto que contiene información 
sobre los atributos de una propiedad, como su valor, si es escribible, enumerable 
y configurable.*/

const persona = {
  nombre: "Juan",
  edad: 30,
};

const descriptorNombre = Object.getOwnPropertyDescriptor(persona, "nombre");
console.log(descriptorNombre);

//mostrara  {value: 'Juan', writable: true, enumerable: true, configurable: true}
{
  let contact = {};
  Object.defineProperty(contact, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.keys(contact); //al definir que no es enumerable no muestra nada ya que es el unico atributo
  console.log(contact._age);
}

/*Nota personal: si colocamos la propiedad writable como false
no podemos editar ni borrar la propiedad*/

/*
Object.preventExtensions(obj):

Prevenir extensiones de un objeto: Después de llamar a este método, no podremos agregar nuevas propiedades al objeto obj.
En otras palabras: Este método "congela" la capacidad de agregar nuevas propiedades a un objeto. Las propiedades existentes aún pueden ser modificadas o eliminadas, pero no se pueden añadir nuevas.
Object.seal(obj):

Sellar un objeto: Este método no permite agregar, eliminar o reconfigurar las propiedades del objeto obj.
En otras palabras: Sellar un objeto va un paso más allá de prevenir extensiones. No solo impide agregar nuevas propiedades, sino que también evita eliminar propiedades existentes y cambiar sus atributos de configuración (como si son enumerables, configurables o escribibles). Los valores de las propiedades existentes aún pueden ser modificados.
Object.freeze(obj):

Congelar un objeto: Similar a Object.seal, pero además hace imposible cambiar el valor de las propiedades.
En otras palabras: Congelar un objeto es el nivel más restrictivo. No solo impide agregar, eliminar o reconfigurar propiedades, sino que también impide modificar los valores de las propiedades existentes. El objeto se vuelve completamente inmutable.
*/

//otra forma de crear objetos es con el factory */
let createPoint = function (x, y) {
  let obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
};
let punto1 = createPoint(1, 1);
let punto2 = createPoint(2, 2);
console.log(punto1.x); // ->  1
console.log(punto2.x); // -> 2

/*podemos simplificar la construccion de esta manera son equivalentes
let createPoint  = function(x, y) {
    return {
        x:x,
        y:y
    }
};
let punto1 = createPoint(1, 1);
let punto2 = createPoint(2, 2);
console.log(punto1.x); // ->  1
console.log(punto2.x); // -> 2
*/

let createColoredPoint = function (x, y, color) {
  let _info = "... object under construction"; //estas propiedas como no estan incluidas
  let _color = color; //en el return es como si fueran privadas por lo cual no podemos acceder a ellas
  console.log(_info);
  return {
    x,
    y,
    getColor() {
      return _color;
    },
  };
};
let coloredPoint1 = createColoredPoint(1, 1, "red"); // -> ... object under construction
let coloredPoint2 = createColoredPoint(2, 2, "green"); // -> ... object under construction
console.log(coloredPoint1.getColor()); // -> red
console.log(coloredPoint2.getColor()); // -> green
console.log(coloredPoint1._color); // -> undefined !!!
console.log(coloredPoint1.x); // -> como la propiedad estan el return es accesible

//constructor y new
/*
let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

*/
