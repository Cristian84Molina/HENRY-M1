"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes 
 métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe 
  dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first 
  (DFS) en cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún 
  parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first
   (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la
   imagen bst.png dentro del directorio homework.
*/




function BinarySearchTree(value) {
  this.value = value;
  this.left= null;
  this.right = null;
};



BinarySearchTree.prototype.size = function(){ // retorna la cantidad de nodos del arbol
  let count = 0; // contador de nodos
  count++; // se suma el primer nodo asi  mismo // cada nodo arranca una cuenta propia asi mmisma
  if (this.left){ // si tengo algo a mi izquierda sumame todo lo que tengo a la izquierda
    count +=this.left.size();
  }
  if(this.right){ //si tengo algo a la derecha suma todo lo que tenga a la dereceha
    count+=this.right.size();
  }
  return count;
};

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){ // la primera pregunta es si es valor es mayor o menor que this.value
  // para saber hacia donde ir // si valor es menor q this value vamos hacia la izquierda
    if (this.left){ // si hay algo a la izquierda
      this.left.insert (value) // le pedios que ejecute el metoso insert contra ese nodo
    } else{
      this.left= new BinarySearchTree (value); // si no hay nada crea el nodo, si tengo null
      return value; // es imprtante cortar la ejecucion cuando hacemos arboles o listas con el return
    }

  };
  if (value > this.value){ // si es mayor vamos hacia la derecha
    if (this.right){ // si hay algo a la derecha
      this.right.insert (value) // le pedios que ejecute el metodo insert contra ese nodo
    } else{
      this.right= new BinarySearchTree (value); // si no hay nada crea el nodo, si tengo null 
      return value;
    }

  }

  return false // si no es mayor ni menor return false


} ;

BinarySearchTree.prototype.contains = function(value){ //contains: retorna true o false luego de evaluar si cierto valor existe 
  // dentro del árbol
  /*if (this.value === value) return true; // lo busca en el mismo nodo
  if (value < this.value && this.left){  // si el valor que estoy buscando es menor a el valor del nodo y si tengo algo a la izquierda
    if (this.left.contains(value)) return true; // los busca e la izquierda
  }
  if (value > this.value && this.right){ // si el valor que estoy buscando es menor a el valor del nodo y si tengo algo a la derecha
    if (this.right.contains(value)); return true; // lo busca a la derecha
    
  };
  return false; // no lo encuentra retorna false*/

  if(this.value == value) return true;

  if (value < this.value && this.left) {
    if (this.left.contains(value)) return true;
  }
  if (value > this.value && this.right) {
    if (this.right.contains(value)) return true;
  }
  return false;
}

// la callback debe procesar el nodo, ejecute esa funcion en el nodo, se para en el nodo y ejecuta la funcion en un orden
  // si es pre-order es primero en el nodo luego a la izquierda y despues a la derecha (nodo - izq- der)
  // in-order es izquierda - nodo - defrecha
  // pos - order izquierda - dercha -nodo
BinarySearchTree.prototype.depthFirstForEach = function (cb, type){
// si no tengo tipo es in order
// pre-order 
// pos - order
  switch (type) {  // funciona como un switch literalmente, es una cosa o mla otra o la otra, 
    case 'pre-order': // caso en el que tengo preorder  // node-izq-der
      cb(this.value);//nodo
      if (this.left) this.left.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      if (this.right) this.right.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      break; // siempre que termina el swick se corta con un break 
    case 'post-order':  // caso en el que tengo post order
      if(this.left) this.left.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      if(this.right) this.right.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      cb(this.value);//nodo
      break; // siempre que termina el swick se corta con un break 
    default: // si no me dicen nada es por defaul // es in order
      if(this.left) this.left.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      cb(this.value);//nodo
      if(this.right) this.right.depthFirstForEach(cb, type); // si  tengo algo a la izquierda le paso la recursion
      break; // siempre que termina el swick se corta con un break 
  }
/*la declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta 
declaraciones asociadas a ese case (caso), así como las declaraciones en los case que siguen.*/

};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, pend){ // le agregamos el array de pendientes para que lo ejecute y lo agrege al array de pendientes
  if (!pend) { // si no tengo nada en pendientes vamos a crear el array, si tengo aca no entra y sigue su camino
    var pend = []; // creaos el array donde guardamos los pendientes pend = []; // creaos el array donde guardamos los pendientes
  };
  cb(this.value); // se procesa la primer callback, el primer nodo

  if (this.left) pend.push(this.left); // pregunto si tengo algo a la izquierda y si es asi lo agrego en el array de pendientes
  if (this.right) pend.push(this.right); //pregunto si tengo algo a la derecha y si es asi lo agrego en el array de pendientes

  if (pend.length > 0) pend.shift().breadthFirstForEach(cb, pend); // si hay algo sacalo  el nodo que vamos a procesar a traves d euna recursion
  //  y lo retorna, y procesalo / y le agregamos el array de pendientes

};

/* esta funcion debe procesar x nivel , debemos ir guardando los nodos que queremos procesar , si procesamos el nodo 1 , guadamos en un array el nodo2 y 3
procesamos el dos, lo sacamos del array y guardamos en el array el nodo 4 y nodo 5  o se  cuando procesamos el nodo 1 guardamos [2,3] cuando prcesamos 
el 2, este sale del array y guardamos el [3,4,5], proceso el 3 sale del array y entra el 6 y 7 a los pendientes [4,5,6,7] luego empiezan a procesarce de a uno*/


let miArbol = new BinarySearchTree(10);
miArbol.insert(5)
miArbol.insert(3)
miArbol.insert(11)
console.log(miArbol)
console.log(miArbol.contains(6))
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
