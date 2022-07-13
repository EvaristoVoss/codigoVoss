class Producto {
    constructor(nombre,codigo,precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
}


const lacteos = [];
const reposteria = [];


//lacteos
lacteos.push(new Producto("Queso La Paulina 1kg", 1, 550));
//reposteria
reposteria.push(new Producto("Harina Industrial", 2, 1500));


for (const lacteos of lacteos) {
    alert("CODIGO (" + lacteos.codigo + ") - " + lacteos.nombre);
}
for (const reposteria of reposteria) {
    alert("CODIGO (" + reposteria.codigo + ") - " + reposteria.nombre);
}

if (productoElegido <= 0) {
    alert("Ingresa un codigo valido");
} else if (productoElegido <=1) {
    alert("Seleccionaste " +  lacteosFind.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoElegido <=2) {
    alert("Seleccionaste " + reposteriaFind.nombre + "\nToca aceptar para agregarlo a tu carrito");
} 