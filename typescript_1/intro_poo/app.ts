

class Avenger {

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(
        nombre:string = "Sin nombre",
        equipo:string,
        nombreReal:string
    ){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log("Se ejecutó el constructor");
    }
}


let antman:Avenger = new Avenger("Antman","cap","Scott Lang");

console.log(antman);