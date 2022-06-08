let comps

function buscaBinaria(vetor, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini) {
        comps++

        // Math.floor() retira as casas decimais de um número
        let meio = Math.floor((ini + fim) / 2)

        switch(fnComp(vetor[meio])) {
            case 0:     // Encontrado o valor de busca
                comps++
                return meio

            case 1:     // Valor busca > valor do meio do vetor
                comps += 2
                ini = meio + 1
                break

            default:   // -1, valor de busca < valor do meio do vetor
                comps += 2
                fim = meio - 1

        }

    }
    // Se chegamos até aqui, significa que fim < ini e, portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    return -1
}

/*
    Na busca binária, a comparação entre o valor de busca e o valor
    que está no meio do vetor tem três possibilidades:
    1ª -> ambos os valores são IGUAIS
    2ª -> o valor de busca é MAIOR que o valor do meio do vetor
    3ª -> o valor de busca é MENOR que o valor do meio do vetor

    Para usar a busca binária em um VETOR DE OBJETOS, precisamos
    transferir a comparação para uma função externa que retorne um
    dos três valores:
    0 -> caso ambos os valores sejam IGUAIS
    1 -> caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> caso o valor de busca seja MENOR que o valor do meio do vetor
*/

/*function comparar(valorMeio) {
    if('FAUSTO' === valorMeio.first_name) return 0
    else if('FAUSTO' > valorMeio.first_name) return 1
    else return -1
}*/

function comparar(valorMeio, valorBusca = 'FAUSTO') {
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.log('Posição de first_name === FAUSTO', buscaBinaria(objNomes, comparar))
console.log('Comparações:', comps)

console.log('Posição de first_name === ULISSES', buscaBinaria(objNomes, 
    (valorMeio, valorBusca = 'ULISSES') => {
        if(valorBusca === valorMeio.first_name) return 0
        else if (valorBusca > valorMeio.first_name) return 1
        else return -1
    }
))
console.log('Comparações:', comps)

console.log('Posição de first_name === TWITTERSON', buscaBinaria(objNomes, 
    (valorMeio, valorBusca = 'TWITTERSON') => {
        if(valorBusca === valorMeio.first_name) return 0
        else if (valorBusca > valorMeio.first_name) return 1
        else return -1
    }
))
console.log('Comparações:', comps)