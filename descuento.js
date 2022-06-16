function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeAPagar = (100 - descuento);
    const precioAPagar = (precio * porcentajeAPagar)/100;
    return precioAPagar;
}

function descuentoCupon(precio, cupon) {
    const descuento = (precio * cupon)/100;
    return descuento;
}

function sumar(a, b) {
    return a + b
}

function calcular(){
    const input1 = document.getElementById("inputPrecio");
    const precio = Number(input1.value);
    const input2 = document.getElementById("inputDescuento");
    const descuento = Number(input2.value);
    const input3 = document.getElementById("inputCupon");
    const cupon = input3.value;
    
    const total = calcularPrecioConDescuento(precio, descuento)

    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento es: $" + total;

    switch (true) {
        case (cupon === "rancio") :
            const total2 = descuentoCupon(precio, 10);
            const total22 = total - total2
            const resultadoP2 = document.getElementById("resultadoP2");
            resultadoP2.innerText = "El precio con descuento y descuento por cupon es: $" + total22;
            break;
        case (cupon === "god") :
            const total3 = descuentoCupon(precio, 20);
            const total33 = total - total3;
            const resultadoP3 = document.getElementById("resultadoP2");
            resultadoP3.innerText = "El precio con descuento y descuento por cupon es: $" + total33;
            break;
        case (cupon === "messi") :
            const total4 = descuentoCupon(precio, 30);
            const total44 = total - total4;
            const resultadoP4 = document.getElementById("resultadoP2");
            resultadoP4.innerText = "El precio con descuento y descuento por cupon es: $" + total44;
            break;
    }
}






