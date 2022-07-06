
function calculoTotal (precioProducto, unidadesProducto) {
    
    let total = (precioProducto * unidadesProducto)
    let final = total + envio;
    return (final + envio) ;
}

const envio = 150;

let producto = parseFloat(prompt("Indicar el precio del producto:"));
let unidades = parseInt(prompt("Indicar la cantidad de unidades:"));

let precioFinal = calculoTotal (producto, unidades);
alert("El precio final de los productos incluido el envio es $" + precioFinal);
