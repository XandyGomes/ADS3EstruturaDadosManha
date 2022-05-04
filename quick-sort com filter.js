function quicksort(vetor) {
    if (vetor.length <= 1) return vetor;
  
    const pivot = vetor.length - 1

    const esquerda = vetor.filter( n => n < pivot)
    const igual = vetor.filter( n => n === pivot)
    const direita = vetor.filter( n => n > pivot)
  
    return quicksort(esquerda).concat(igual).concat(quicksort(direita));
  }
  
  console.log(quicksort([ 2, 5, 7, 1, 6, 3, 4 ]));