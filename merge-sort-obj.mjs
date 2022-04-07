function mergeSort(vetor, fnComp){
    if(vetor.length < 2) return vetor;
    let meio = Math.floor(vetor.length / 2);
    
    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);
    
    vetEsq = mergeSort(vetEsq, fnComp);
    vetDir = mergeSort(vetDir, fnComp);

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(fnComp(vetDir[posDir],vetEsq[posEsq])){
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        }else{
            vetRes.push(vetDir[posDir]);
            posDir++;
        }
    }
    let sobra

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq);
    }
    else{
        sobra = vetDir.slice(posDir);
    }

    return [...vetRes, ...sobra];
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs';

let objMotoristasOrd = mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') >= 0);

console.log(objMotoristasOrd);