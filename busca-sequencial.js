function buscaSequencial(vetor, valorBusca){
    for(let i=0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca ) return i //encontrou valorBusca
    }
    return -1 // valorBusca não existe
}

// const frutas = ['laranja','maça','uva','pera','jabuticaba','limão','mamão']

// console.log('Posição de uva', buscaSequencial(frutas, 'uva'))
// console.log('Posição de mamão', buscaSequencial(frutas, 'mamão'))
// console.log('Posição de abacate', buscaSequencial(frutas, 'abacate'))

// import {nomes} from './data/vetor-nomes.mjs'

const nomes = require('./data/vetor-nomes')

console.log('Posição de JULIO', buscaSequencial(nomes, 'JULIO'))