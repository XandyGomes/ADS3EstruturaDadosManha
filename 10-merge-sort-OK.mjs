/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor) {

    // Para ser dividido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return vetor    // Sai da função sem fazer nada

    // Acha o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2)

    // slice() divide um vetor da primeira posição informada (inclusive)
    // até a última posição informada (exclusive)
    let vetEsq = vetor.slice(0, meio)

    // Quando o segundo parâmetro de slice() é omitido, a fatia vai
    // da posição informada até o final do vetor
    let vetDir = vetor.slice(meio)

    divisoes++

    //console.log({vetEsq, vetDir})

    // Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        // O menor elemento é o do vetor esquerdo
        comps++
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        // O menor elemento é o do vetor direito
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    
    // Determinar qual dos vetores tem sobra
    let sobra

    // Sobra à esquerda
    if(posEsq < posDir) {
        // Copia para a sobra todos os elementos a partir de posEsq
        // até o fim de vetEsq
        sobra = vetEsq.slice(posEsq)
    }
    // Sobra à direita
    else {
        // Copia para a sobra todos os elementos a partir de posDir
        // até o fim de vetDir
        sobra = vetDir.slice(posDir)
    }

    juncoes++

    // O vetor final ordenado será a concatenação de vetRes + sobra
    return [...vetRes, ...sobra]
}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

let numsOrd = mergeSort(nums)

console.log({numsOrd})
console.log({comps, divisoes, juncoes})

/********************************************************** */

// Quando temos algoritmos de ordenação recursivos, as variáveis
// de estatística não podem ser reiniciadas dentro da própria
// função do algoritmo. Portanto, devemos zerá-las antes de fazer
// uma nova chamada à função
comps = 0, divisoes = 0, juncoes = 0

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
let nomesOrd = mergeSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomesOrd)
console.log({comps, divisoes, juncoes, memoriaMB})