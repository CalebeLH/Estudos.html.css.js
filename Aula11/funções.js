const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));

/*Funções*/
//função principal

function soma(a, b) {
    return a + b;
}

//função anônima
const subtracao = function(a, b) {
    return a - b;
}

/*ARROW FUNCTION () => {} */

// Arrow function com uma linha de código não precisa de chaves nem return       
const multiplicacao = (a, b) => a * b;

//Arrow function com mais de uma linha de código precisa de chaves e de return
const divisao = (a, b) => {
    if (b == 0) {
        return 'Não é possível dividir por 0.';
    } else 
    return a / b
}

//Chamando as funções
console.log('Soma', soma(num1, num2));
console.log('Subtração', subtracao(num1, num2));
console.log('Multiplicação', multiplicacao(num1, num2));
console.log('Divisão', divisao(num1, num2));