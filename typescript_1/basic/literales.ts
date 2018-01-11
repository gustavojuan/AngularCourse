let nombre:string = "Juan";
let apellido:string = "Pérez";
let edad:number = 32;

//let texto = "Hola, " + nombre + " "+ apellido + "("+ edad +")";
let texto = `Hola, 
${ nombre } ${ apellido}
(${edad})`;

let texto2:string = ` ${ 1 + 2 }`;
let texto3:string = `${getNombre()}`;


function getNombre()
{
    return "Fernando";
}

console.log(texto);
console.log(texto2);
console.log(texto3);