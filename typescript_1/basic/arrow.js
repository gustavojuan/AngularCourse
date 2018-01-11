"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var muFuncion2 = function (a, b) {
    return a + b;
};
var muFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    return nombre.toUpperCase();
};
var miFuncion3F = function (nombre) { return nombre.toUpperCase(); };
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
console.log(miFuncion('Normal'));
console.log(miFuncion('Flecha'));
console.log(muFuncion2(5, 3));
console.log(muFuncion2F(5, 3));
console.log(miFuncion3('Gordon'));
console.log(miFuncion3F('Gordon'));
hulk.smash();
