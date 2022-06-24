//Helpers

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

//Calcular Mediana

  function calcularMediana(lista) {

    lista.sort(function(a, b){
      return a - b
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

//Mediana General

  const salarios = argentina.map(function(valor){
    return valor.salario;
})

const salariosSort =salarios.sort(function(a, b){
    return a - b
});

const medianaGeneralArg = calcularMediana(salarios);

// Mediana del top 10%


const spliceStart = (salariosSort.length * 90) / 100; //18
const spliceCount = salariosSort.length;

const salariosArgTop10 = salariosSort.slice(
  spliceStart,
  spliceCount,
);

const medianaTop10Arg = calcularMediana(salariosArgTop10);

const salarios90Porciento = salariosSort.slice(0, spliceStart,);

const mediana90PorcientoArg = calcularMediana(salarios90Porciento);


console.log({
  medianaGeneralArg,
  medianaTop10Arg,
  mediana90PorcientoArg,
});

// Reto porcentaje de pobreza, clase media y clase alta

const claseBajaArg = argentina.filter(function(persona){
  return persona.salario < 1000;
});

const claseMediaArg = argentina.filter(function(persona){
  return persona.salario > 999 && persona.salario < 5000;
})

const claseAltaArg = argentina.filter(function(persona){
  return persona.salario >= 5000;
});

const porcentajeDePobreza = 100 * claseBajaArg.length / argentina.length;
const porcentajeDeClaseMedia = 100 * claseMediaArg.length / argentina.length;
const porcentajeClaseAlta = 100 * claseAltaArg.length / argentina.length;

console.log(
  "El porcentaje de pobres en Argentina es del " + porcentajeDePobreza + "%, " +
  "el porcentaje de clase media en Argentina es del " + porcentajeDeClaseMedia + "% y " +
  "el porcentaje de clase Alta en Argentina es del " + porcentajeClaseAlta + "%."
  );





