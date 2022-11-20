function Tree(value){ // creacion de un arbol
    this.value = value;
    this.left= null;
    this.right = null;
  };
  
Tree.prototype.add = function(value){
    var arbolito = new Tree(value);
    if (this.left == null){ // si no tiene  nada a la izquierda
      this.left = arbolito;// agrega
    }else{
      this.left.add(value); // esta es la recursividad
    }
    return value
};  
var arbol = new Tree(8); //nodo raiz
  
console.log(arbol.add(5))


arbol
  
