function bubbleSort(vetor, fnComp){
    let trocou
    do{
        trocou = false
        for(let i=0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i] , vetor[i+1])){
                [[vetor[i], vetor[i+1]] = [vetor[i+1],vetor[i]]]
                trocou = true
            }
        }
    } while(trocou)
}
import {objMotoristas} from './data/motoristas-obj-desord.mjs'
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista )

bubbleSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {
        return elem1.nome_motorista > elem2.nome_motorista
    } else return elem1.razao_social > elem2.razao_social
})
console.log(objMotoristas)