//le pedimos al usuario que ingrese la cantidad de dias
let totalDiasNumero = parseInt(prompt("Ingrese la cantidad de dias"));
console.log(totalDiasNumero);

let anios = Math.floor(totalDiasNumero/365);
let semanas = Math.floor((totalDiasNumero % 365)/7);
let dias = Math.floor();
console.log(semanas);

console.log("El total de años son: " + anios);
console.log("El total de semanas son: " + semanas);

