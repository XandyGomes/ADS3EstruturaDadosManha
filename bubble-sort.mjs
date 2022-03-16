let pass, comp, trocas
function bubbleSort(vetor) {
    pass = 0, comp = 0, trocas = 0
    let trocou
    do {
        pass++
        trocou = false
        for(let i = 0; i < vetor.length -1; i++) {
            comp++
            if(vetor[i] > vetor[i+1]){
                [[vetor[i], vetor[i+1]] = [vetor[i+1],vetor[i]]]
                trocou = true
                trocas++
            }
        }
    } while(trocou)
}
// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]
// bubbleSort(nums)
// console.log(nums)
// console.log({pass, comp, trocas})

import {nomes} from './data/nomes-desord.mjs'
bubbleSort(nomes)
console.log(nomes)
console.log({pass, comp, trocas})
