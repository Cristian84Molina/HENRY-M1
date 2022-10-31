
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
   //            8, 9, 10
  var x = 10;
  console.log(x); // imprime el 10
  console.log(a); // imprime el 8
  var f = function(a, b, c) {
 //                8,9,10
    b = a;  // b --> 8
    console.log(b); // imprime 8
    b = c; // --> 10
    var x = 5;
  }
  f(a,b,c);
  //8,9,10
  console.log(b); // imprime 9 
}
c(8,9,10); // comienza el contexto de ejecucion global
console.log(b); // imprime 10
console.log(x); // imprime 1
```

```javascript
console.log(bar); // undefined
console.log(baz);  //  no se ejecuta por que no esta 'baz' definida como variable
foo();
function foo() { console.log('Hola!'); } 
var bar = 1;
baz = 2; //  no esta definida como una variable, si no como un objeto global
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // imprime Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // imprime Tony
(function() { 
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // imprime Franco
   }
})(); // ejecuta la funcion 
console.log(instructor); // Imprime Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; // asigna un nuevo contenido a la variable
    let pm = "Reverse Flash"; // es una variable diferente a let pm = 'Franco'
    console.log(instructor); // imprime the flash
    console.log(pm); // imprime "Reverse Flash"
}
console.log(instructor); // imprime The flash
console.log(pm); // imprime franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"   
"2" * "3"  
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);  // imprime undefine por que no esta definida todavia
   console.log(foo()); // imprime 2 x que esta llamando a una funcion

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) { // si es false entonces no se cumple la condicion 
        var snack = 'Friskies';
        return snack;
    }
    return snack; //retorna  undefine por que no esta definido dentro de la funcion
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // imprime ''Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // imprime undefine por que test no esta definido como funcion
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // segundo
   setTimeout(function() { console.log(2); }, 1000); //quinto
   setTimeout(function() { console.log(3); }, 0); // cuarto 
   console.log(4); // tercero 
}

printing(); // primer puesto 
```
