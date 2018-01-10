function activar( quien:string,
                  objeto:string = "BatSeñal",
                  momento?:string){

    let mensaje:string;

    if(momento){
        mensaje  = `${ quien } activó la ${ objeto } en la ${momento}`;
    }else{
        mensaje  = `${ quien } activó la ${ objeto }`;
    }

    console.log(mensaje);
}

activar("Gordon","batiseñal", "tarde");