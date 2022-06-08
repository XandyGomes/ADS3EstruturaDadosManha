import Queue from './lib/Queue.mjs'

let fila = new Queue()
console.log(fila.print())

// Inserções na fila
fila.enqueue('Cleverton')
fila.enqueue('Lindalvânia')
fila.enqueue('Praxedes')
fila.enqueue('Gerinalda')

console.log(fila.print())

// Remoção da fila
let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

// Novas inserções
fila.enqueue('Osclerson')
fila.enqueue('Hermenevaldo')
console.log(fila.print())

// Observando o início da fila
let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

// Nova remoção
atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
