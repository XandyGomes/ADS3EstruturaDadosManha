function fatorialRec(n){
    if(n <=1){
        return 1
    }else{
        return n * fatorialRec(n - 1)
    }
}
console.log("Fatorial de 5: ", fatorialRec(5))