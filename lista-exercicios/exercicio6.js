/*
6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

const prompt = require("prompt-sync")();

var carrosvendidos = Number(prompt("Informe o Total de Carros Vendidos: "));
var totalvendas = Number(prompt("Insira o Valor de suas Vendas: R$ "));
var salariofixo = Number(prompt("Insira o Seu Salario Fixo: R$ "));
var valorporcarro = Number(prompt("Insira o Valor Que Receber por carro Vendido: R$ "));

var comissaofixa = Number(prompt("Insira o Valor da comissão Fixa por Carro Vendido: R$ "));
var comissaoTotalVendas = 0.05 * totalvendas;
var Salario = salariofixo + (carrosvendidos * (valorporcarro + comissaofixa) + comissaoTotalVendas);

console.log("Seu Salario Do mês é : R$" + Salario);

/*
const prompt = require("prompt-sync")();

// Leitura dos dados
var numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
var valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
var salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
var valorPorCarroVendido = parseFloat(prompt("Digite o valor por carro vendido:"));

// Cálculo do salário final
var comissaoFixaPorCarro = parseFloat(prompt("Digite a comissão fixa por carro vendido:"));
var comissaoPorVendas = 0.05 * valorTotalVendas;
var salarioFinal = salarioFixo + (numeroCarrosVendidos * (valorPorCarroVendido + comissaoFixaPorCarro)) + comissaoPorVendas;

// Exibição do resultado
console.log("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));
*/
