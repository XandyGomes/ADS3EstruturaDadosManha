let pass, comps, trocas

function selectionSort(vetor, fnComp) {

    pass = 0, comps = 0, trocas = 0

    // Loop posSel vai até a PENÚLTIMA posição do vetor
    for(let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++

        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetor.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if(fnComp(vetor[posMenor], vetor[i])) posMenor = i
            comps++
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        comps++
        // if(vetor[posSel] > vetor[posMenor]) {
        if(fnComp(vetor[posSel], vetor[posMenor])) {
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }

    }

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
selectionSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024

console.timeEnd('Tempo de ordenação')

console.log(objMotoristas)
console.log({pass, comps, trocas, memoriaMB})