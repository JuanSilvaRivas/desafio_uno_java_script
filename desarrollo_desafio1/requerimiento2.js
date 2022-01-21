//requerimiento2
//pedir numeros 1 y 2 al usuario
let numeroUno = parseInt(prompt("Ingrese el primer numero"));//usamos parseInt para convertir string a numero
console.log(numeroUno);//guardamos valor 

let numeroDos = parseInt(prompt("Ingrese el segundo numero"));//usamos parseInt para convertir string a numero
console.log(numeroDos);//guardamos valor

//realizamos la operaciones de suma resta multiplicacion division y modulo
let suma = numeroUno + numeroDos;
let resta = numeroUno - numeroDos;
let multiplicacion = numeroUno * numeroDos;
let division = numeroUno / numeroDos;
let modulo = numeroUno % numeroDos

//mostramos por consola el resultado de todos 
console.log("La suma de los numeros es igual a " + suma);
console.log("La resta de los numeros es igual a " + resta);
console.log("La multiplicacion de los numeros es igual a " + multiplicacion);
console.log("La division de los numeros es igual a " + division);
console.log("El resto de los numeros es igual a " + modulo);  