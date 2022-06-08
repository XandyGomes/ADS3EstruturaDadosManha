let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor, fnComp) {

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
    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        // O menor elemento é o do vetor esquerdo
        comps++
        // if(vetEsq[posEsq] < vetDir[posDir]) {
        // A ordem dos parâmetros na chamada à função de comparação
        // deve ser INVERTIDA porque o if é verdadeiro quando o
        // primero elemento é MENOR (e não maior) que o segundo
        if(fnComp(vetDir[posDir], vetEsq[posEsq])) {
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

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenação')

// Ordenando por nome_motorista
//selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
let objMotoristasOrd = mergeSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024

console.timeEnd('Tempo de ordenação')

console.log(objMotoristasOrd)
console.log({comps, divisoes, juncoes, memoriaMB})