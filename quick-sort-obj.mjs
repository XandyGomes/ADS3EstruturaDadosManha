function quicksort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if (fim <= ini) {  
        return vetor;
    }
    const pivot = fim
    let div = ini -1
    for(let i = ini; i < fim; i ++) {
        if(fnComp(vetor[pivot] , vetor[i])) {
            div++
            if(div !== i) {
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            }
        }
    }
    div++
    if(fnComp(vetor[div] , vetor[pivot]) && div !== pivot) {
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ] 
    }
    quicksort(vetor, fnComp, ini, div -1)
    quicksort(vetor, fnComp, div + 1, fim)
}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

// quicksort(objMotoristas, (elem1, elme2) => elem1.nome_motorista.localeCompare(elme2.nome_motorista, 'pt-br') >= 0 )
// quicksort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

quicksort(objMotoristas, (elem1, elme2) => {
    if(elem1.razao_social === elme2.razao_social) {
        return elem1.nome_motorista > elme2.nome_motorista
    }
    else return elem1.razao_social > elme2.razao_social
})


console.log(objMotoristas)

