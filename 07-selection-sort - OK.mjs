/*
    SELECTION SORT

    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação.

    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que
    o segundo.

*/

let pass, comps, trocas

function selectionSort(vetor) {

    pass = 0, comps = 0, trocas = 0

    // Loop posSel vai até a PENÚLTIMA posição do vetor
    for(let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++

        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetor.length; i++) {
            if(vetor[posMenor] > vetor[i]) posMenor = i
            comps++
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        comps++
        if(vetor[posSel] > vetor[posMenor]) {
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }

    }

}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

// Pior caso
// let nums = [ 99, 0, 11, 22, 33, 44, 55, 66, 77, 88  ]

// Melhor caso
let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]

selectionSort(nums)
console.log(nums)
console.log({pass, comps, trocas})

/***************************************************************** */

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
selectionSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})