/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
      informação e outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

// Classe que representa a unidade de armazenamento da lista encadeada
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// Classe que representa a estrutura de dados de uma lista encadeada
export default class LinkedList {

    #head
    #tail
    #count

    constructor() {

        this.#head = null;
        this.#tail = null;
        this.#count = 0;

    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0;
    }

    // Getter que retorna o número de elementos da lista encadeada
    get count() {
        return this.#count;
    }

    // Método para inserir em qualquer posição da lista encadeada
    insert(pos, value) {

        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(value);

        //1º caso: a lista encadeada está vazia
        if (this.isEmpty){
                
            this.#head = inserted;
            this.#tail = inserted;
    
        }

        //2º caso: a lista encadeada não está vazia, insersão na primeira posição
        else if(pos === 0){
            // O sucessor do nodo inserido será o nodo que atualmente ocupa a primeira posição da lista
            inserted.next = this.#head;
            // O início da lista passa a ser o novo nodo inserido
            this.#head = inserted;

        }

        //3º caso: insersão mo final da lista 
        else if(pos >= this.#count){

            this.#tail.next = inserted;
            this.#tail = inserted;

        }

        //4º caso: posição intermediária
        else {
            // Nodo da posição ANTERIOR à de inserção
            let before = this.#head;

            // Percurso até a posição ANTERIOR à de inserção, saltando de nodo em nodo por meio do ponteiro next
            for(let i=1; i<pos; i++){
                before = before.next;
            }

            // Nodo da posição POSTERIOR à de inserção
            let after = before.next;

            // O sucessor do nodo inserted passa a ser o nodo after
            inserted.next = after;

            // O sucessor do nodo before passa a ser o nodo inserted
            before.next = inserted;
        }

        this.#count++

    }

    //atalho para inserção de um valor no inicio da lista
    insertHead(value){
        this.insert(0, value);
    }

    //atalho para iserção no final da lista
    insertTail(value){
        this.insert(this.#count, value);
    }

    //metodo para remoção de um nodo na lista encadeada
    remove(pos){

        //1º caso: a lista está vazia ou a posição informada está fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined;
        }

        let remove

        //2º caso: remoção do inicio da lista
        if(pos === 0){
            remove = this.#head;
            this.#head = this.#head.next;

            if (this.#count === 1){
                this.#tail = null;
            }
        }

        //3º caso: remoção de nodo intermediário ou final
        else {
            let before = this.#head

            for(let i = 1; i < pos; i++){
                before = before.next
            }
            removed = before.next

            let after = removed.next

            before.next = after

            if(pos === this.#count - 1){
                this.#tail = before
            }
        }

        this.#count--

        return removed.data
    }

    removeHead(){
        return this.remove(0);
    }

    removeTail(){
        return this.remove(this.#count - 1);
    }

    // Método para verificar a posição da primeira ocorrência de um valor na lista
    // Retorna:
    // 1) Caso o valor exista, a posição onde ele foi encontrado
    // 2) Caso o valor não exista, -1

    indexOf(value){
        //1º casop: lista vazia
        if(this.isEmpty){
            return -1;
        }

        let node = this.#head;

        for(let i = 0; i < this.#count; i++){
            if(node.data === value){
                return i;
            }
            node = node.next;
        }
        return -1;
    }

    peek(pos){
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined;
        }
        let node = this.#head;
        for(let i = 0; i < pos; i++){
            node = node.next;
        }
        return node.data;
    }

    peekHead(){
        return this.peek(0);
    }

    peekTail(){
        return this.peek(this.#count - 1);
    }

    print(){
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++){
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` )', count: ${this.#count}`
        return output
    }
}