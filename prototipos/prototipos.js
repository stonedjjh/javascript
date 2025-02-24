"use strict";

function Persona(nombre) {
  this.name = nombre;
}

var persona = new Persona("Neo");

Persona.prototype.saluda = function () {
  console.log("Hola, me llamo " + this.name);
};

persona.saluda();

// ----------- Heredando de Persona -------------------

function Agente(nombre) {
  Persona.call(this, nombre);
  // esto ejecuta el constructor de Persona con el this de Agente
  // definiendo en el this de Agente una propiedad name
  // y asignandole el parámetro recibido
}

// le asignamos como prototipo una persona
Agente.prototype = new Persona("soy un prototipo!");

var agente = new Agente("Smith");

agente.saluda();

console.log(
  Object.getPrototypeOf(agente),
  agente instanceof Agente,
  agente instanceof Persona,
  agente instanceof Object
);

// ----------- Herencia múltiple ------------------------

function Superheroe() {
  this.vuela = function () {
    console.log(this.name + " vuela");
  };
  this.esquivaBalas = function () {
    console.log(this.name + " esquiva balas");
  };
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();

let point = { x: 0, y: 0 };
let coloredPoint = { color: "red" };
coloredPoint.__proto__ = point;
point.x = 5;
console.log(Object.getOwnPropertyNames(coloredPoint)); //Obtenemos las propiedades del Objeto Color
console.log(coloredPoint.color);
console.log(coloredPoint.x); //Aqui busca en la cadena de protoripo hasata encontrar la propiedad
//aqui crea la propiedad x en coloredPoint y no sobreescribe la del prototipo por proteccion
coloredPoint.x = 100; // new property
console.log(coloredPoint.x); //Aqui accede a la propiedad creada y no al prototipo
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));

point.y = 200;
console.log(coloredPoint.y); //Aqui como existe busca de nuevo en el prototipo
console.log(point.y);

/********Segunda parte******* */
const figure = {
  getType: function () {
    return this.type ? this.type : "unknown";
  },
};
let circle = {
  type: "circle",
  center: { x: 0, y: 0 },
  radius: 100,
};
circle.__proto__ = figure;

console.log(figure.getType());
console.log(circle.getType());

Object.setPrototypeOf(circle, figure); //nos permite asociar el objeto objetivo con el objeto prototipo.
let proto = Object.getPrototypeOf(circle); //El segundo devuelve el prototipo del objeto indicad
console.log(circle.getType());
console.log(proto);

//También podemos crear un objeto vacío a partir del prototipo seleccionado con el metodo Object.create()
let circle2 = Object.create(figure);
console.log(circle2.getType()); //desconocido
circle2.type = "circle";
(circle2.center = { x: 0, y: 0 }), (circle2.radius = 100);
console.log(circle2.getType()); //circle

//constructor de prototipo
let Figure2 = function () {
  this.getType = function () {
    return this.type ? this.type : "unknown";
  };
};
let figure2 = new Figure2();
let Circle2 = function (center, radius) {
  this.type = "circle";
  this.center = center;
  this.radius = radius;
};
Circle2.prototype = figure2;
let circle1 = new Circle2({ x: 0, y: 0 }, 10);
let circle3 = new Circle2({ x: 100, y: 100 }, 100);

let Triangle = function (v1, v2, v3) {
  this.type = "triangle";
  this.vertices = [v1, v2, v3];
};
Triangle.prototype = figure2;
let triangle1 = new Triangle(
  { x: 0, y: 0 },
  { x: 50, y: 50 },
  { x: 10, y: 100 }
);
console.log(`el tipo de circle1 es ${circle1.getType()}`);
console.log(`el tipo de triangle1 es ${triangle1.getType()}`);
console.log(`circle1 es un instancia de Figure2 ${circle1 instanceof Figure2}`);
console.log(
  `triangle1 es un instancia de Figure2 ${triangle1 instanceof Figure2}`
);

//podemos añadir un metodo a un prototipo ya que un prototipo es un objeto

Circle2.prototype.hi = function () {
  return "Hi!";
};

//el metodo esta disponible para todos los objetos creados o nuevos
console.log(`circle1 saluda ${circle1.hi()}`);
console.log(`triangle1 saluda ${triangle1.hi()}`);
console.log(`figure2 saluda ${figure2.hi()}`);

/*La función de prototipos que se presenta aquí permite realizar modificaciones a objetos
 existentes (por ejemplo, objetos predefinidos)*/
let testString = new String("unu doi trei");
console.log(testString.length);

String.prototype.hi = function () {
  return "Hi!";
};

console.log(testString.hi());
console.log("abcd".hi());
