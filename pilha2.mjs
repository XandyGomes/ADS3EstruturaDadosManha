import Stack from './lib/Stack.mjs'

let pilha = new Stack()
console.log('Esta é minha pilha: ', pilha.print())
console.log('Está vazia?', pilha.isEmpty)

pilha.push(35)
pilha.push(45)
pilha.push(55)
pilha.push(65)

console.log('Esta é minha pilha: ', pilha.print())
console.log('Está vazia?', pilha.isEmpty)

let removido = pilha.pop()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())

// pilha.unshift(25)
// console.log(pilha.print())