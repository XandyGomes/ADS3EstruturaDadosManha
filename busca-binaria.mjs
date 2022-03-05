/***************************
 * BUSCA BINÁRIA
 * 
 * Requer um conjunto de dados ORDENADO.
 * Atua dividindo o vetor sucessivamente em metades aproximadas,
 * até que o valor de busca seja localizado, ou que o ponteiro
 * de fim acabe antes do ponteiro de início. Essa última situação
 * indica que o valor de busca não existe no conjunto.
*/

function buscaBinaria(vetor, valorBusca) {
    let ini = 0
    let fim = vetor.length - 1
    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2)
        if(valorBusca === vetor[meio]) {
            return meio
        }
        else if(valorBusca > vetor[meio]){
            ini = meio + 1
        }
        else {
            fim = meio - 1
        }
    }
    return -1
}
// let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

// console.log('Posição de 22: ', buscaBinaria(num, 22))

import {nomes} from './data/vetor-nomes.mjs'
console.log('Posição de ALEXANDRE: ', buscaBinaria(nomes, 'ALEXANDRE'))