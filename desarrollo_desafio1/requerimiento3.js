//pedir al usuario el valor de los grados celsius
let gradosCelsius = parseInt(prompt("Ingrese los grados Celsius"));
console.log(gradosCelsius);

//transformamos los grados Celsius a Kelvin y a Farenheit
let gradosKelvin = gradosCelsius + 273.15 ;
let gradosFarenheit = (gradosCelsius * 9/5) +32;

console.log("Los grados Celsius en Kelvin son: " + gradosKelvin);
console.log("Los grados Celsius en Farenheit son: " + gradosFarenheit);