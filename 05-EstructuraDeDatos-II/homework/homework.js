"use strict";

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add= function(value){
  var node = new Node(value), // crea un nuevo nodo
  current = this.head; // asigna el head 
  if (!current) { // el head es vacio
    this.head = node; // agrega el primer nodo
    this._length++;
    return node;
  }

  while (current.next) { // apunta al siguiente  nodo 
      current = current.next;
  }
  current.next = node; // agrega un nuevo nodo
  this._length++;
  return node;


}

LinkedList.prototype.remove= function(value){
  // lista vacia
  if(!this.head) return null;
   // lista tiene un solo nodo
  if (this.head.next === null) { 
    var value = this.head.value;
    this.head = null;
    return value;
  }// hay mas de un nodo
  var current = this.head;
  while (current.next.next) { // apunta al siguiente  nodo  y para en el anteultimo
    current = current.next; //elimina el último nodo de la lista y retorna su valor
  }
  var value = current.next.value;
  current.next = null;
  return value;

  
}


LinkedList.prototype.search= function(value){
  if(this.head === null) return null; // Hay algo en la lista? Si no hay nada (vacia) devolveme null.
    let current = this.head; // recorro todos los nodos si es que no esta vacia y me quedo con el head.
  while(current){          // mientras exista current
    if(current.value === value) return current.value; // si encuentra el nodo devolver el valor.
  else if(typeof value == "function"){  // En caso de que no, value puede ser una funcion
    if(value(current.value)){
      return current.value;           // si es verdadero devolver la funcion
    }
  }
  current = current.next;  // si no se cumplieron ningunas de las condiciones paso al next.
  }
  return null; // si no lo encontro retorna null

}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, 
posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, 
{instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, 
  a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro 
  al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) 
  y calcula el módulo de ese número total por la cantidad de buckets; 
  de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, 
si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35; // cantidad de buckets
  this.buckets = [];
};

HashTable.prototype.hash = function(key){
  let acumulador=0;  // acumula sumando los numeros que transformamos d elas letras

  for (const palabra of key) { // recorre la palabra
    const num = palabra.charCodeAt(); //transforma cada letra del string en un numero 
    acumulador+=num; // suma cada leta 
  }
  console.log ( acumulador % this.numBuckets)
  return acumulador % this.numBuckets; // nos da el modulo de la division que es el lugar donde se guardara 

};

HashTable.prototype.set = function(key, value){
  if (typeof key !== 'string') throw TypeError ('Keys must be strings')
  const indice = this.hash(key);
  let bucket = this.buckets [indice];
  if (!this.buckets[indice]) { // si no tengo nada que se convierta en un objeto vacio
    this.buckets[indice] = {}; 
  } // si en bucket no hay nada creamos un objeto
  // si hay algo le agregamos una propiedad 
  this.buckets[indice][key] = value;
};

HashTable.prototype.get = function(key){
  const indice = this.hash(key);
  let bucket = this.buckets [indice];
  if (bucket){
    return bucket[key];
  }else {
    return null;
  }
};

HashTable.prototype.hasKey = function(key){
 if(this.get(key)) {
  return true;
 }else{
  return false;
 }
};

const array = new HashTable();
array.set('56445424584')



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
