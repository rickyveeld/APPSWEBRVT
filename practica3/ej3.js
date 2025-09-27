function simularPeticionAPI(){
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve("datos recibidos coreectamente");
        },5000);
    });

    }
    async function obtenerDatos(){
         let detener =await simularPeticionAPI();
         console.log(detener);

    }
obtenerDatos();
