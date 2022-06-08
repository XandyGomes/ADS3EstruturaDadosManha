import Stack from './lib/Stack.mjs'

let pilha = new Stack()
console.log(pilha.print())
console.log('Está vazia?', pilha.isEmpty)

pilha.push(35)
pilha.push(77)
pilha.push(19)
console.log(pilha.print())
console.log('Está vazia?', pilha.isEmpty)

let removido = pilha.pop()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())

// Tentativa de inserção no início da pilha
//pilha.unshift(90)
//console.log(pilha.print())