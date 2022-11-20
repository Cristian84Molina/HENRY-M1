'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // Paso 1. Crea una variable resultado que guarda num
  var resultado = [1]; //  creo una variable a la cual le asigno un array con el primer numero q es 1
  
  for (var i = 2; i < num+1; i++) { // recorro 
  if (num % i === 0) { 
    console.log(resultado)
    resultado.push(i);
    console.log(resultado)
    num/=i;
    console.log(resultado)
    i-=1;
    console.log(resultado)
  }
  }
  return resultado;

}

console.log(factorear(180))



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var n, i, k, aux;
  n = array.length ; // tamaño de nuestra lista
  for ( k = 1; k < n; k++) { // el ciclo va a ser menor hasta que k  sea menor a la lista // iteracion de los indices
    for (i = 0; i < (n - k); i++) { // iteracion de los valores
        if (array[i] > array[i + 1]) { // comparamos si el valor del indice es menor al valor del indice + 1
          console.log (array)
            aux = array[i]; // guardamos en el auxiliar este valor
            console.log (array)
            array[i] = array[i + 1]; // el indice i  de la lista va a ser igual al indice i + 1
            array[i + 1] = aux; // le  asignamos al indice de la lista + 1 el valor del aux que guardamos anteriormente
            console.log (array)
        }
    }
  }
  return array;

}
console.log(bubbleSort([5, 1, 4, 2, 8]))



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var n, i, k, aux;
  n = array.length ;
  for ( k = 1; k < n; k++){ // iteramos segun la cantidad que tiene el arraay
    i = k - 1;  // por cada iteracion le asignamos k - 1, por eso k arranca en 1 
    aux = array[k] // el auxiliar va a contener el valor de  la posocion k 
    
    while (i >= 0 && array[i] > aux ){ // preguntamos si el numero con el que arranca es mayor o igua a 0
      // i si el numero que se encuentra en la posicion i del array es mayor que el auxiliar, para ordenar a partir de ese indice
      array [i + 1] = array [i]; // asignamos lo que hay en la posicion de i
      --i; // reducimos una posicion 
      console.log(array)
    }
    
    array [i + 1] = aux // por fuera del bucle indicamos array en la posicion i + 1 asignamos lo que hay en aux 
    console.log(array)
  }
  return array;

}

console.log(insertionSort([5, 1, 4, 2, 8]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var n, i, k, aux; // declaro las variables a utilizar
  n = array.length ; // tamaño de nuestra lista
  for ( k = 0; k < n; k++){ // arranca la iteracion asignamos 0 ak para que comienze por el primero y recorre hasta el final del mismo
    aux= k; //asignamos a la variable aux k
    for (i = k + 1 ; i < n; i++){ // iteramos el contenido de los indices
      if (array[i] < array[aux]){ // el condicional es que si el vallor
        aux= i;
        console.log(aux)
      }

    }
    [array[k], array[aux ]] = [array[aux], array[k]]
    
  }
  return array; 
  


}

console.log(selectionSort([5, 1, 4, 2, 8]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
