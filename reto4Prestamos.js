
function calcularTotal(dinero, interes){
    const total1 = dinero + (dinero * interes / 100);
    return total1;
}

function solicitar(){

const value1 = document.getElementById("cantidad");
const dineroSolicitado = Number(value1.value)

const value2 = document.getElementById("cuotas");
const interes = Number(value2.value);
const interes2 = value2.value;

const totalPrestamo = calcularTotal(dineroSolicitado, interes)


const resultado1 = document.getElementById("resultado1");
resultado1.innerText = "El total del dinero a devolver es: $" + totalPrestamo;

switch(true) {
    case (interes === 5) :
        const valorCuotas = totalPrestamo / 3;
        const resultado = document.getElementById("resultado2");
        resultado.innerText = "El valor de las cuotas será de: " + valorCuotas;
        break;    
    case (interes === 10) :
        const valorCuotas1 = totalPrestamo / 6;
        const resultado1 = document.getElementById("resultado2");
        resultado1.innerText = "El valor de las cuotas será de: " + valorCuotas1;
        break;
    case (interes === 20) :
        const valorCuotas2 = totalPrestamo / 12;
        const resultado2 = document.getElementById("resultado2");
        resultado2.innerText = "El valor de las cuotas será de: " + valorCuotas2;
        break;
    case (interes === 25) :
        const valorCuotas3 = totalPrestamo / 18;
        const resultado3 = document.getElementById("resultado2");
        resultado3.innerText = "El valor de las cuotas será de: " + valorCuotas3;
        break;
    case (interes === 30) :
        const valorCuotas4 = totalPrestamo / 24;
        const resultado4 = document.getElementById("resultado2");
        resultado4.innerText = "El valor de las cuotas será de: " + valorCuotas4;
        break;
    case (interes2 === "-") :
        const resultado5 = document.getElementById("resultado2");
        resultado5.innerText = "Porfavor introduzca la cantidad de cuotas";
        break;    
}

const totalInteres = dineroSolicitado * interes / 100;
const resultado6 = document.getElementById("resultado3");
resultado6.innerText = "El interés a pagar es de: " + totalInteres;


};