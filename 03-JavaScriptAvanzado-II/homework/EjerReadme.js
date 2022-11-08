function Repeatify (str, num) {
    if ( num > 0) {
    var hola = str.repeat(num);
    console.log (hola)
    }else if ( num < 0) {
        console.log ('Error Numero Invalido')
    }else {
        console.log ('string vacio')
    }
}

Repeatify('hola' ,5);

///////////////////////////



