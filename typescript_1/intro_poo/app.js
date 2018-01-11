"use strict";
class Avenger {
    constructor(nombre = "Sin nombre", equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log("Se ejecutó el constructor");
    }
}
let antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
