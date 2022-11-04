console.log( 6 / "3")  // la puede hacer por intenta castear el string en un numero
console.log( "2" * "3")
console.log (4 + 5 + "px") // concatena pero lo convierte en un string
console.log ("$" + 4 + 5) // lo mismo lo convierte en string y lo concatena 
console.log("4" - 2) // resta 
console.log("4px" - 2) // no puede castearlo el string por el px - no es un numero
console.log(7 / 0) // tiende a infinito siempre que se divide por cero
console.log({}[0]) // es un scope, no es un objeto, da un arreglo con unsa sola pocision
console.log(parseInt("09")) // convierte a traves del number el '9' a numero 9
console.log(5 && 2) //  el booleano de 5 es true, el booleano de 2 es true
console.log(2 && 5)
console.log(5 || 0)
console.log(0 || 5)
console.log([3]+[3]-[10]) // concatena '3'+'3'-'10' = '33'-'10' = 23 (de arreglos a string de string a numero)
console.log(3>2>1)
console.log([] == ![])
