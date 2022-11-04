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

console.log(obj.prop.getFullname()); // imprime Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // deberia ir a buscar en el contexto global y es 'Juan Perez'