const campoNumero = document.getElementById('numero');
const botaoAdivinhar = document.getElementById('adivinhar');
const escolhidos = document.querySelector('#escolhidos');
const imagem = document.querySelector('#imagem');
imagem.src='';

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
botaoAdivinhar.addEventListener('click', () => {
    const numero = campoNumero.value;
    if (numero == numeroSecreto) {
        alert('Parabéns! Você acertou o número secreto!');
        imagem.src='sucesso.webp';
    }else {
        /*Número errado*/
        escolhidos.textContent += ' ' + numero;
        if (numero < numeroSecreto) {
            alert('O número secreto é maior que ' + numero);
        }else {
            alert('O número secreto é menor que ' + numero);
        }
        imagem.src='erro.gif';
    }
})