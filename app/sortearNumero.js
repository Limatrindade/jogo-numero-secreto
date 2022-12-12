const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gearNumeroAleatorio ()

function gearNumeroAleatorio() {
    return parseInt(Math.random() * 100)
}

console.log("número secreto:" , numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
