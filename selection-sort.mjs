let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
let pass, comp, troca
function selectionSort(vetor){
    pass = 0
    comp = 0
    troca = 0
    for(let posSel = 0; posSel < vetor.length -1; posSel++){
        pass++
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor]>vetor[i]){
                posMenor = i
            }
            comp++
        }

        if(vetor[posSel]>vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            troca++
        }
    }
}
selectionSort(nums)
console.log(nums)
console.log({pass, comp, troca})