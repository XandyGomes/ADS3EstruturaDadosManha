function selectionSort(vetor, fnComp){
    for(let posSel=0; posSel < vetor.length -1; posSel++){
        let posMenor = posSel + 1
        for(let i = posMenor +1; i< vetor.length; i++){
            if(fnComp(vetor[posMenor], vetor[i])) posMenor = i
        }
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
        }
    }
}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)
// console.log(objMotoristas)

selectionSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }
    else return elem1.razao_social > elem2.razao_social
})
console.log(objMotoristas)