/*
let idade = 36
altura = 2.56
let nome = 'Jeff Smax'

console.log(nome, typeof String)
console.log(altura, typeof number)
console.log(idade, typeof number)
*/


/*
//calculadora
let num1 = window.prompt('Digite um número:');
let num2 = window.prompt('Digite um segundo número:');

//parse converte tipos de dados
//parseInt converte para inteiro
num1 = parseInt(num1);
num2 = parseInt(num2);

let resultado = num1 + num2

console.log(num1, typeof num1);
console.log(num2,  typeof num2);

console.log(resultado)
*/

/*
if (num1 > num2) {
    console.log('O primeiro número é maior que o segundo.')
} else {
    console.log('O segundo número é maior que o primero.')
}
*/

//let ano_nascimento = window.prompt('Digite seu ano de nascimento:')
//let nome = window.prompt('Qual é o seu nome?')

//ano_nascimento = parseInt(ano_nascimento);
//idade = 2026 - ano_nascimento

//console.log('Olá ', nome, 'você tem ', idade, 'anos de idade.');

const nome = window.prompt('Digite seu nome: ');
const anoNascimento = parseInt(window.prompt('Digite o seu ano de nascimento: '));

const idade = 2026 - anoNascimento

const maiorIdade = (idade >= 18) ? true : false;

if (idade < 1) {
    console.log("Data de nascimento inválida")
} else if (maiorIdade) {
    console.log("Você ainda é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}





