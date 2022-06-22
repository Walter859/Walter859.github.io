//Promedio

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

  //Mediana

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularMediana(lista) {

  lista.sort(function(elementoA, elementoB){
      return elementoA - elementoB;
  });
  const mitadLista = parseInt(lista.length / 2);
  let mediana;
  
  

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = lista[mitadLista];
    return mediana;
  } 
}

// Moda

const lista1=[1,2,3,1,2,3,4,22,4,2,1,];

function calcularModa(lista){

const listaCount={};

lista.map(function(elemento){
  if(listaCount[elemento]){
      listaCount[elemento]+=1;}
      else{listaCount[elemento]=1;}
    });
    
const listaArray = Object.entries(listaCount).sort(function(elementoA,elementoB){
  return elementoA[1]-elementoB[1];
});

const moda=listaArray[listaArray.length-1];

return moda;

};

//Tarea

function imprimirValues(objeto) {
  var arrayValues = Object.values(objeto);
  return arrayValues;
}
function imprimirKeys(objeto) {
  var arrayKeys = Object.keys(objeto);
  return arrayKeys;
}

function calcularModa2(lista){

  const listaCount={};
  
  lista.map(function(elemento){
    if(listaCount[elemento]){
        listaCount[elemento]+=1;}
        else{listaCount[elemento]=1;}
      });
    
  var arrayValues = imprimirValues(listaCount);
  var arrayKeys = imprimirKeys(listaCount);

  var max = Math.max(...arrayValues);
  var index = arrayValues.indexOf(max)
  var moda = arrayKeys[index]

  return moda;

  }
  
  //Reto

  const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notes2 = [
  {
      course: "Educación Física",
      note: 8,
      credit: 5,
  },
  {
      course: "Programación",
      note: 4,
      credit: 7,
  },
  {
      course: "Finanzas personales",
      note: 6,
      credit: 6,
  },
];

function calcularPromPonderado(objeto) {

    const arrayDividendo = objeto.map(function(valor){
      return valor.note * valor.credit
    });

    var dividendo = arrayDividendo.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );

    const arrayDivisor = objeto.map(function(valor){
      return valor.credit;
    });

    var divisor = arrayDivisor.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );

    var promPronderado = dividendo / divisor;

    return promPronderado;

}
