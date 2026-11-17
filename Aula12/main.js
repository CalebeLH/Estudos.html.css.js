const imprimir = () => { // Arrow function
    window.print()
}
//DOM document object model
const btn2 = document.querySelector('#botaopergunta'); { //# é ID, . é class
    btn2.addEventListener('click', () => {
        prompt('Qual é o seu nome?');
    } )
}