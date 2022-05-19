/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/

export default class Queue {
    #data

    constructor() {
        this.#data = []
    }

    enqueue(value) {
        this.#data.push(value)
    }

    dequeue() {
        return this.#data.shift()
    }

    peek() {
        return this.#data[0]
    }

    get isEmpty() {
        return this.#data.length === 0
    }

    print() {
        let output = '[ '
        for (let i = 0; i < this.#data.length; i++) {
           if(output !== '[ ') output += ', '
               output += `(${i + 1}) ${this.#data[i]}`
        }
        return output + ' ]'
    }
}