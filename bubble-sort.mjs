let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

let comparacoes, trocas

function bubleSort(vetor){
    let trocou
    comparacoes = 0
    trocas = 0

    do{
        trocou = false
        for(let i = 0;i < vetor.length -1; i++) {
            comparacoes++
            if(vetor[i] > vetor[i+1]){
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                trocas++
            }
        }
    }while(trocou)
}
bubleSort(nums)
console.log(nums)
console.log({comparacoes, trocas})
