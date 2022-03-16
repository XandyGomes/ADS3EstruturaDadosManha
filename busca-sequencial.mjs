/*
    ALGORITMO DE BUSCA SEQUENCIAL

    Percorre o vetor, verificando se cada um dos elementos corresponde ao valor de busca. Ao encontrar uma correspondência, retorna a posição onde o valor de busca está no vetor.

    Caso o valor de busca não exista no vetor, retorna o valor convencional -1.
*/

function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca)
        return i // encontrou valorBusca
    }
    return -1 // valorBusca não existir
}

// const frutas = ['laranja', 'maça', 'uva', 'pera', 'jaboticaba', 'limao', 'mamão']

// console.log('Posição de uva: ', buscaSequencial(frutas,'uva'))
// console.log('Posição de maçã: ', buscaSequencial(frutas,'maça'))
// console.log('Posição de abacate: ', buscaSequencial(frutas,'abacate'))

import { nomes } from './data/vetor-nomes.mjs'

console.log('Posição de ALEXANDRE: ', buscaSequencial(nomes,'ALEXANDRE'))


// console.log('Posição de MARIA: ', buscaSequencial(nomes,'MARIA'))
// console.log('Posição de HEITOR: ', buscaSequencial(nomes,'HEITOR'))