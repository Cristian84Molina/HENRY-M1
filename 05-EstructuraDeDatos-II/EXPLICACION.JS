//explicacion listas enlazadas
// los nodos son objetos
// ejemplo
/*let nodo = { // creamos el primer nodo
    value: 5,  // es una propiedad contiene un valor
    next: nodo2, // es una propiedad y una referencia (hace referencia al siguiente nodo)
}

const nodo2 = {
    value: 10,
    next: nodo3,
}

var nodo3 = {
    value: 7,
    next: null,
}*/

// hace falta generaar una clase lista, que sera un objeto, que tamnbien tendras dos propiedades
// la mas importante sera la que llamaremos head , que es una referencia a un nodo al primer nodo
// la otra es size
// mi lista enlazada es un objeto, la lista solo conoce al primer nodo, el head es la cabecera de la lista

function LinkedList (){ //lista Vacia recien creada
    this.head =null; // cabeza de la lista
    this.size = 0; // tamaño de la lista ,
    // la lista se va a ir armando una vez que se conecte con el nodo

}  // LinkedList y Node son funciones

function Node (data){
    this.data = data;  //cuando instancienmos el nodulo le pasamos por parametro al constructor el valor (data)
    this.next = null;   // cuando el nodo recien se creo tiene como referencia null
}

// le decimos a la lista que inserte un nodo, cuando recibe el valor que le pasamos lo primero que tiene que hacer es 
//crear el nodo.
//ej. le pasamos el valor 5, crea el nodo y el primer nodo lo inserta en head, luego los siguientes nodos
// los va poniendo al  final de la lista
// el size(que mide la longitud de la lista) que estaba en 0, aumento a 1, con la creacion del nodo
// el nuevo nodo consulta si puede insertarlo en head y va pasando nodo por nodo hasta insertarse luego del ultimo

LinkedList.prototype.add = function (value) { // implementamos un metodo add
    const newNode = new Node (value); // creamos el nodo pasandole el valor
    //this.head = newNode; // insertamos en head el nuevo nodo
    let current = this.head;  // creamos una variable que guarda una referencia y que sirve para recorrer la lista enlazada, 
    //es sla posicion actual donde estoy parado, y para empezar desde el principio le asignamos head, nos movemos entre objetos
    // al comienzo carrent es null
    if (!current){ //me paro en carrent y me pregunto si carrent esta vacio, si es asi 
        this.head =newNode // asignamos el  nuevo nodo
        this.size++; //aumentamos la longitud de la lista
        return newNode; // cortamo la ejecucion
    }  

    //ya tenemos el head, la lista ya tiene el head ahora:
    
    while (current.next){   // mientras tenga adonde moverme me muevo, aca pregunta tengo a donde ir?
                            // current.next apunta a un objeto y por definicion un objeto es true
                            // cuando llega al ultimo nodo vuelve a pregunta y este carrent.next tiene un null, y 
                            // valor real de null es false, entonces se detiene el while, dejamos de movernos
                            // llegamos al final de la lista e insertamos el nodo nuevo
        current= current.next; //
    }
    //me paro en carrent y me pregunto si carrent esta vacio
    current.next = newNode; // aca asignamos luego de recorrer la lista el nuevo nodo
    this.size++; // avanza la longitus de la lista

    
}; 
const miLista = new LinkedList();
miLista.add(10);
miLista.add(15);
miLista.add(7);
console.log(miLista);

//////////////////////////////////////////////////////
/* EXPLICACION HASH TABLE 
como un array es mas rapido para acceder a traves de su indice
generamos un array a trabes de hash
tenemos un objeto el cual tiene una clave : valor (obj{name:jorge}),
esta clave:valor ---> name:jorge le aplicamos una funcion hash y el valor 'jorge', se va a guardar
en un indice de un nuevo array que se lo va asignar hash

*/
function HashTable() {
    this.array = [];
    this.array.length(35);
  }
  
  HashTable.prototype.hash = function(){};
  
  HashTable.prototype.set = function(){};
  
  HashTable.prototype.get = function(){};
  
  HashTable.prototype.hasKey = function(){};