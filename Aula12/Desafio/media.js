const campoNome = document.querySelector('#nome');
const campoNota1 = document.getElementById('nota1');
const campoNota2 = document.querySelector('#nota2');
const campoNota3 = document.getElementById('nota3');
const btnCalcular = document.querySelector('#calcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    nome = campoNome.value;
    nota1 = parseFloat(campoNota1.value);
    nota2 = parseFloat(campoNota2.value);
    nota3 = parseFloat(campoNota3.value);
    media = (nota1 + nota2 + nota3) / 3;

    if (media < 0 || media > 10) {
        resultado.textContent = 'Por favor, insira notas válidas entre 0 e 10.';
    } else if (media >= 6) {
        resultado.textContent = nome + '.Você foi provado com média: ' + media.toFixed(2);
    } else if (media >= 4) {
        resultado.textContent = nome + '.Você esta de prova final com média: ' + media.toFixed(2);
    } else {
        resultado.textContent = nome + 'Reprovado com média: ' + media.toFixed(2);
    }
});
