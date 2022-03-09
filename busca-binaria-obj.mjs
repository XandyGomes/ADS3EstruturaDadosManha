let contador

function buscaBinaria(vetor, fnComp) {
    contador = 0
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini) {
        contador++
        let meio = Math.floor((ini+fim)/2)
        switch(fnComp(vetor[meio])){
            case 0:
                contador++
                return meio
            case 1:
                contador += 2
                ini = meio + 1
                break
            default:
                contador += 2
                fim = meio -1
        }
    }
    return -1
}

import {objNomes} from './data/vetor-obj-nomes.mjs'

function comparar(valorMeio,valorBusca = 'ALEXANDRE') {
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}
console.log('Posição de first_name === ALEXANDRE: ', buscaBinaria(objNomes, comparar))
console.log('Comparações: ', contador)