/*8. Faça um script que determine o volume de uma caixa d’água cilíndrica, 
sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura */

const prompt = require ("prompt-sync")();

var raio = Number(prompt("insira o Raio da Caixa d' Agua: "));
var altura = Number(prompt("Insira a Altura da Caixa d' Agua: "));

var VolumeCx = Math.PI * Math.pow(raio, 2)* altura;

console.log (`O Volume da Caixa de Agua é: ${VolumeCx.toFixed(2)} m³`)
//console.log("O Volume da Caixa é: " + VolumeCx);