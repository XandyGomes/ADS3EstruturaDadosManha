import DoublyLinkedList from "./lib/DoublyLinkedList.mjs"

const lista = new DoublyLinkedList()

console.log('Lista vazia: ', lista.print())

// Inserção em lista vazia
lista.insert(0, 'Fiat 147')
console.log('Inserção em lista vazia:', lista.print())

// Inserção na primeira posição
lista.insert(0, 'Fusca')
console.log('Inserção na primeira posição:', lista.print())

// Inserções na posição final
lista.insert(lista.count, 'Chevette')
console.log('Inserção na última posição:', lista.print())
lista.insert(lista.count, 'Opala')
console.log('Inserção na última posição:', lista.print())

// Inserção em posição intermediária (posição 2)
lista.insert(2, 'Brasília')
console.log('Inserção na posição 2:', lista.print())

// insertHead()
lista.insertHead('Passat')
console.log('insertHead():', lista.print())

// insertTail()
lista.insertTail('Corcel')
console.log('insertTail():', lista.print())

// Remoção da primeira posição
let removido = lista.remove(0)
console.log({removido}, lista.print())

// Remoção da última posição
removido = lista.remove(lista.count - 1)
console.log({removido}, lista.print())

// Remoção em posição intermediária
removido = lista.remove(2)
console.log({removido}, lista.print())

let pos0 = lista.peek(0)
let pos3 = lista.peek(3)
let pos4 = lista.peek(4)
console.log({pos0, pos3, pos4})

// Inserção de mais alguns valores na lista
lista.insertTail('Variant')
lista.insertTail('Polara')
lista.insertTail('Maverick')
lista.insertTail('Kombi')
console.log(lista.print())

let posPolara = lista.indexOf('Polara')
let posFusca = lista.indexOf('Fusca')
let posCorcel = lista.indexOf('Corcel')
let posKombi = lista.indexOf('Kombi')
console.log({posPolara, posFusca, posCorcel, posKombi})