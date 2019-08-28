//FUNCION ANONIMA
//FORMAS DE ESCRIBIR FUNCIONES:

// function nombre() {}
// var nombre = function() {
//   return "hola";
// };
// console.log(nombre());

//CALLBACKS (FUNCION QUE ES ARGUMENTO DE OTRA)
// var animales = ["camello, vaca", "rata"];
// animales.forEach(function(animal) {
//   console.log(animal);
// });
// // tambien se puede usar map en lugar de forEach.

// function sumar(n1, n2) {
//   return n1 + n2;
// }
// function restar(n1, n2) {
//   return n1 - n2;

//funcion normal
// function calculadora (n1, n2, operacion) {
//    if (operacion=="+") {
//        sumar (n1, n2);
// } else if (operacion=="-"){
//     restar (n1, n2);
// }

//funcion con callback

// function calculadora(n1, n2, operacion) {
//   return operacion(n1, n2);
// }

// console.log(calculadora(2, 3, sumar));

//Arrow function (función flecha) la flecha reemplaza la palabra reservada function

// var nombre = "Maria";
// var saludar = nombre => {
//   console.log("hola " + nombre);
// };

// saludar(nombre);

// var animales = ["camello", "vaca", "rata"];
// animales.forEach(animal => {
//   console.log(animal);
// });

// var sumar = (n1, n2) => {
//   return n1 + n2;
// };
// var restar = (n1, n2) => {
//   return n1 - n2;
// };

// var calculadora = (n1, n2, operacion) => {
//   return operacion(n1, n2);
// };

// console.log(calculadora(2, 3, restar));

//----TEMPLATE STRINGS

// var numero = 3;
// console.log(` Hola
//                     me llamo
// //                     ${numero * 2}`);

var serie;
var series = [];

do {
  serie = prompt("nombre de serie");
  series.push(serie);
} while (serie != "fin");

// // console.log(series);

// //BORRAR EL ULTIMO ELEMENTO

series.pop(series);
console.log(series);

// // //BORRAR UN ELEMENTO ESPECIFICO
// //IndexOf
// var indice = series.indexOf("got");
// console.log(indice);
// // Splice
// series.splice(indice + 1, 2);
// console.log(series);

//PASAR A STRING
//Join

// var seriesString = series.join();
// console.log(seriesString);

// var seriesArray = seriesString.split(",");
// console.log(seriesArray);

// var saludo = "hola//como//estas";
// var seriesArray = saludo.split("//");
// console.log(seriesArray);

//ORDENAR

series.sort();
console.log(series);
