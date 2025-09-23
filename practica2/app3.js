const persona = [
    {nombre: "ana", edad:22},
    {nombre:"luis", edad:35},
    {nombre:"maria",edad: 28}
];
const encontrar = persona.find(per=>per.nombre=="luis");
console.log("la persona es", encontrar);
const lista = persona.forEach(per=>console.log(per));
const suma = persona.reduce((suma, per)=> suma + per.edad,0);
console.log("la suma es de" + suma);