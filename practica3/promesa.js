function verificarUsuario(usuario){
let prom = new Promise ((resolve, reject)=>{
if(usuario=="admin"){
resolve("acceso concedido")
}
else{
    reject ("acceso denegado")
}

});
return prom;
}
verificarUsuario("admin")
.then(res=>console.log(res))
.catch(err=> console.error(err));
verificarUsuario("Ivan")
.then(res=> console.log(res))
.catch(err=>console.error(err));