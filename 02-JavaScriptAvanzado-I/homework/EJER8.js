var snack = 'Meow Mix';

function getFood(food) {
    if (food) { // si es false entonces no se cumple la condicion 
        var snack = 'Friskies';
        return snack;
    }
    return snack; //retorna  undefine por que no esta definida dentro de la funcion
}

getFood(false);
