'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let deci = 0;

    for (let i = 0; i < num.length; i++) {
      // se crea la variable i i se recorre con el for y avanza de a uno
       deci += num[i] * 2 ** (num.length - 1 - i);
       // a la variable deci se le suma la multiplicacion de la potencia de cada uno de ellos, empezando de atras para adelante
       
    }
    return deci;

    /* 
100 --> 100.lenght = 3
1 -- 1*2** (2-0)
1 -- 1*2**2

0 -- 0*2** (2-1)
0 -- 0*2**1

0 -- 0*2** (2-2)
0 -- 0*2**2

*/
}
// return parseInt(num, 2) solucion rapida con la funcion prestablecida parseInt

function DecimalABinario(num) {
  // tu codigo aca
  var NumBinario = "";
  while (num > 0){
    // sie el numero es mayor que cero entra en el bucle
    NumBinario = num % 2 + NumBinario;
    // en la variable NumBinario se concatena los restos
    num = Math.floor (num / 2);
    // la division de num se termina cuando el numero deja de ser entero
  }
  return NumBinario;

  ///let bin = num.toString(2)
  ///return bin;
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}