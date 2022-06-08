import Deque from './lib/Deque.mjs'

// Lista de compras em que primeiro devem aparecer
// os itens alimentícios e depois os itens de higiene
// e limpeza

let listaCompras = new Deque()
console.log(listaCompras.print())

// Alimentício -> início
listaCompras.insertFront('Arroz')
listaCompras.insertFront('Feijão')
listaCompras.insertFront('Macarrão')
console.log(listaCompras.print())

// Higiene/Limpeza -> final
listaCompras.insertBack('Sabão em pó')
listaCompras.insertBack('Desodorante')
listaCompras.insertBack('Água sanitária')
console.log(listaCompras.print())

// Alimentício -> início
listaCompras.insertFront('Café')
listaCompras.insertFront('Açúcar')
console.log(listaCompras.print())

// Higiene/Limpeza -> final
listaCompras.insertBack('Amaciante')
listaCompras.insertBack('Shampoo')
console.log(listaCompras.print())

// Desisti de comprar shampoo
let removido = listaCompras.removeBack()
console.log({removido})
console.log(listaCompras.print())

// Passei pelo corredor, peguei açúcar e removi da lista
removido = listaCompras.removeFront()
console.log({removido})
console.log(listaCompras.print())

// Consultar qual o próximo item da lista
let proximo = listaCompras.peekFront()
console.log({proximo})
console.log(listaCompras.print())

// Consultar o último item da lista
let ultimo = listaCompras.peekBack()
console.log({ultimo})
console.log(listaCompras.print())