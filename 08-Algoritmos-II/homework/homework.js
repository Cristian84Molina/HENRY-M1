'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*if(array.length <= 1) return array;

  var pivote = array[0];
  var iguales = [];
  var listaMenores = [];
  var listaMayores = [];

  for ( let i = 0; i < array.length; i++) { 
    if (pivote > array[i]){
      listaMenores.push(array[i])
    } else if (pivote === array.length[i]){
      iguales.push(array[i])
    } else {
      listaMayores.push(array[i])

      }
    }
  
  return [].concat(quickSort(listaMenores).concat(iguales).concat(quickSort(listaMayores)));
};*/


  if(array.length <= 1) return array;

          var pivot = array[0];
          var equals = [];
          var left = [];
          var right = [];

          for (let i = 0; i < array.length; i++) {
            if(array[i] < pivot){
              left.push(array[i]);          
            }else if(array[i] === pivot){
              equals.push(array[i]);
            }else{
              right.push(array[i]);
            }
          }
          return [].concat(quickSort(left).concat(equals).concat(quickSort(right)));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;
        var mitad = Math.floor(array.length / 2);
        var left = array.slice(0, mitad);
        var right = array.slice(mitad);
        return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var izq =  0;
  var der = 0;
  var arrayMergeado = [];

  while(izq < left.length && der < right.length){
        if(left[izq] < right[der]){
              arrayMergeado.push(left[izq]);
              izq++;
        } else{
              arrayMergeado.push(right[der])
              der++
        }
  }
  return arrayMergeado.concat(left.slice(izq)).concat(right.slice(der));
};



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
