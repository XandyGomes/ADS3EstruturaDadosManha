/*
    ESTRUTURA DE DADOS PILHA
    
    É uma estrutura de dados em que, usando uma lista linear (vetor) como
    base, permite inserções apenas no final e remoções também a partir do
    final.
    Com isso, temos o comportamento conhecido como LIFO = Last In, First Out
    (último a entrar, primeiro a sair).
    Pilhas são usadas em tarefas computacionais que requerem a inversão da
    ordem de entrada dos dados.
*/

export default class Stack {
    #data

    constructor() {
        this.#data = []
    }

    push(value) {
        this.#data.push(value)
    }

    pop(){
        return this.#data.pop()
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    print(){
        return JSON.stringify(this.#data)
    }
}