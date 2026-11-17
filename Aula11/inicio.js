//Laços de repetição
//FOR:repete um bloco de código um número específico de vezes
// Sintaxe: for (inicialização; condição de parada; passo) { }
/*
for (let i = 0; i <10; i++) {
    console.log(i);
}*/

//exemplo de uso do FOR
/*
let soma = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(window.prompt('digite um número: '))
    soma = soma + numero
}
 console.log('A soma dos número informados é:', soma)
*/

//WHILE:Repete um bloco de código enquanto um requisito for verdade

let par = null;
 while(par == null) {
    const numero = parseInt(prompt("Informe um número par:"));
    if (numero % 2 == 0) {
         par = true;
         console.log("Obrigado por informar um número par!", numero);
    }
 }
par = false;
do {
    const numero = parseInt(prompt("Informe um número ímpar"));
    if (numero % 2 != 0){
        par = false;
        console.log("Obrigado por informar um número ímpar!", numero);
    }
}while (par == true);