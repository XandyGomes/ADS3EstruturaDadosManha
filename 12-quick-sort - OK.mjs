/*
    QUICK SORT
    
    Escolhe um dos elementos do vetor para ser o pivô (na nossa implementação,
    o último elemento) e, na primeira passada, divide o vetor, a partir da posição
    final do vetor, em um subvetor à esquerda contendo apenas valores menores que
    o pivô e outro subvetor à direita, que contém apenas valores maiores que o pivô.
    
    Em seguida, recursivamente, repete o processo em cada um dos subvetores até que
    todo o vetor esteja ordenado.
*/

let pass = 0, comps = 0, trocas = 0

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {

    // Só trabalhamos se a região do vetor tiver, pelo menos, 2 elementos
    if(fim <= ini) return  // Condição de saída

    pass++

    const pivot = fim
    let div = ini - 1

    // For indo da posição ini até fim - 1
    for(let i = ini; i < fim; i++) {
        comps++
        if(vetor[pivot] > vetor[i]) {
            div++
            if(div !== i) {
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                trocas++
            }
        }
    }

    div++

    // Colocamos o pivô em seu lugar definitivo
    comps++
    if(vetor[div] > vetor[pivot] && div !== pivot) {
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ]
        trocas++
    }

    // Chama o Quick Sort para o subvetor à esquerda do pivô
    quickSort(vetor, ini, div - 1)

    // Chama o Quick Sort para o subvetor à direita do pivô
    quickSort(vetor, div + 1, fim)
}

/*********************************************************************** */

let nums = [ 2, 5, 7, 1, 6, 3, 4 ]

quickSort(nums)

console.log(nums)
console.log({pass, comps, trocas})

/*********************************************************************** */

import { nomes } from './data/nomes-desord.mjs'

pass = 0, comps = 0, trocas = 0

console.time('Tempo de ordenação')
quickSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})