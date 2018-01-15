

let prom1 = new Promise( function (resolve, reject) {
    setTimeout( ()=>{
        console.log('Promesa terminada');
        // termina bien
        resolve();

        // termina mal
        //reject();

    },1500)
})

console.log("paso 1");
prom1.then(
    function () {
        console.log('Ejecutarme cuando se termine bien');
    },
    function () {
        console.error("Ejecutarme cuando se termine mal");
    })

console.log("paso 2");