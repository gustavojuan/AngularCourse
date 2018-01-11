let miFuncion = function (a:any) {
    return a;
}
let miFuncionF = (a:any) => a;

let muFuncion2 = function (a:number, b:number) {
    return a + b;
}
let muFuncion2F = (a:number, b:number) => a + b;

let miFuncion3 = function (nombre:string) {
    return nombre.toUpperCase();
}
let miFuncion3F = (nombre:string) => nombre.toUpperCase();

let hulk = {
    nombre :"Hulk",
    smash(){
        setTimeout(  () => console.log(this.nombre + " smash!!"),1500);
    }
}

console.log(miFuncion('Normal'));
console.log(miFuncion('Flecha'));

console.log(muFuncion2(5,3));
console.log(muFuncion2F(5,3));

console.log(miFuncion3('Gordon'));
console.log(miFuncion3F('Gordon'));

hulk.smash();