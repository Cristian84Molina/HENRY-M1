function test() {
    console.log(a);  // imprime 1
    console.log(foo()); // imprime 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();