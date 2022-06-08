/*
    ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
      informação; a segunda, que guarda o endereço do nodo anterior; e a
      terceira, que guarda o endereço para o nodo seguinte da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro OU do último nodo e percorrendo
      a sequência
*/

/* Classe que representa a unidade de informação da lista duplamente encadeada */
class Node {
    constructor(val) {
        this.prev = null    // Ponteiro para o nodo anterior da sequência
        this.data = val     // Armazena a informção relevante para o usuário
        this.next = null    // Ponteiro para o nodo seguinte da sequência
    }
}

/* Classe que representa a estrutura de dados lista duplamente encadeada */
export default class DoublyLinkedList {

    #head       // Início da lista (cabeça)
    #tail       // Fim da lista (cauda)
    #count      // Quantidade de elementos da lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }
    
    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }
    
    // Método PRIVADO que encontra um nodo por sua posição
    #findNode(pos) {
        let node
        // Nodo encontra-se na primeira metade da lista
        if(pos < this.#count / 2) {
            node = this.#head
            for(let i = 0; i < pos; i++) node = node.next
        }
        // Nodo encontra-se na segunda metade da lista
        else {
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) node = node.prev
        }
        return node
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {

        // Cria o nodo a ser inserido, contendo a informação
        // passada pelo usuário
        let inserted = new Node(val)

        // 1º caso: lista vazia
        if(this.isEmpty) {
            // O nodo inserido será, ao mesmo tempo, o início
            // e o fim da lista
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º caso: inserção na primeira posição
        else if(pos === 0) {
            // O nodo inserido aponta à frente para o #head
            inserted.next = this.#head
            // #head aponta para trás para o nodo inserido
            this.#head.prev = inserted
            // #head passa a ser o inserted
            this.#head = inserted
        }

        // 3º caso: inserção na última posição
        else if (pos >= this.#count) {
            // O nodo inserido aponta para trás para o #tail
            inserted.prev = this.#tail
            // #tail aponta para a frente para o nodo inserido
            this.#tail.next = inserted
            // # tail passa a apontar para o nodo inserido
            this.#tail = inserted
        }

        // 4º caso: inserção em posição intermediária
        else {
            // Nodo que atualmente ocupa a posição de inserção
            let nodePos = this.#findNode(pos)
            // Nodo imediatamente anterior a nodePos
            let before = nodePos.prev
            // O nodo anterior passa a apontar, para frente, para o nodo inserido
            before.next = inserted
            // O nodo inserido passa a apontar, para trás, para o nodo anterior
            inserted.prev = before
            // O nodo inserido passa a apontar, para a frente, para o nodo da posição
            inserted.next = nodePos
            // O nodo da posição passa a apontar, para trás, para o nodo inserido
            nodePos.prev = inserted
        }

        this.#count++
    }

    // Método de atalho para inserção na primeira posição
    insertHead(val) {
        this.insert(0, val)
    }

    // Método de atalho para inserção na última posição
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // Método para remover um nodo de qualquer posição
    remove(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do primeiro nodo
        if(pos === 0) {
            removed = this.#head
            // O segundo nodo (next de removed) passa a ser o novo #head
            this.#head = removed.next
            // Se o novo #head for um nodo válido, ele não pode ter um antecessor
            if(this.#head) this.#head.prev = null
            // Caso especial: remoção do nodo único de uma lista
            if(this.#count === 1) this.#tail = null
        }

        // 3º caso: remoção do último nodo
        else if(pos === this.#count - 1) {
            removed = this.#tail
            // O penúltimo nodo (prev de removed) passa a ser o novo #tail
            this.#tail = removed.prev
            // Se o novo #tail for um nodo válido, ele não pode ter um sucessor
            if(this.#tail) this.#tail.next = null
            // Caso especial: remoção do nodo único de uma lista
            if(this.#count === 1) this.#head = null
        }

        // 4º caso: remoção em posição intermediária
        else {
            removed = this.#findNode(pos)   // Nodo a ser removido
            let before = removed.prev       // Nodo anterior ao removido
            let after = removed.next        // Nodo posterior ao removido

            // O nodo anterior passa a apontar à frente para o nodo posterior
            before.next = after

            // O nodo anterior passa apontar atrás para o nodo anterior
            after.prev = before
        }

        this.#count--

        return removed.data
    }

    // Método de atalho para remoção da primeira posição
    removeHead() {
        return this.remove(0)
    }

    // Método de atalho para remoção da última posição
    removeTail() {
        return this.remove(this.#count - 1)
    }

    // Método que consulta o conteúdo de qualquer nodo, dada a posição
    peek(pos) {
        // Lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
        const node = this.#findNode(pos)
        return node.data
    }

    // Método de atalho para consultar o primeiro nodo
    peekHead() {
        return this.peek(0)
    }

    // Método de atalho para consultar o último nodo
    peekTail() {
        return this.peek(this.#count - 1)
    }

    // Método que retorna a posição do nodo cujo conteúdo foi especificado
    indexOf(val) {
        // Acha a posição que corresponde ao meio da lista,
        // arredondando para cima
        const middle = Math.ceil(this.#count / 2)
        let node1 = this.#head      // Começa na cabeça da lista
        let node2 = this.#tail      // Começa na cauda da lista

        for(let pos = 0; pos < middle; pos++) {
            // Verifica se o valor está no nodo1
            if(val === node1.data) return pos
            // Verifica se o valor está no nodo2
            if(val === node2.data) return this.#count - 1 - pos
            // node1 avança via next
            node1 = node1.next
            // node2 retrocede via prev
            node2 = node2.prev
        }

        // Valor não encontrado na lista
        return -1

    }

    // Método para exibição da lista encadeada
    print() {
        let output = '( '
        let node = this.#head
    
        for(let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }
}