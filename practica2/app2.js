const producto = [
{nombre: "Laptop", precio: 12000},
{nombre:"Mouse", precio: 250},
{nombre:"Teclado", precio:750},
{nombre:"monitor", precio: 3000}
];
const mayores = producto.filter(pre => pre.precio>1000).map(producto => producto.nombre);
console.log(mayores);

