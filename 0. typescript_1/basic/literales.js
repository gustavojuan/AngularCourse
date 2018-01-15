"use strict";
var nombre = "Juan";
var apellido = "Pérez";
var edad = 32;
//let texto = "Hola, " + nombre + " "+ apellido + "("+ edad +")";
var texto = "Hola, \n" + nombre + " " + apellido + "\n(" + edad + ")";
var texto2 = " " + (1 + 2);
var texto3 = "" + getNombre();
function getNombre() {
    return "Fernando";
}
console.log(texto);
console.log(texto2);
console.log(texto3);
