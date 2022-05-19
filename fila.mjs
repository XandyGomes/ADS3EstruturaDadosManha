import Queue from "./lib/Queue.mjs";

let fila = new Queue();

console.log("Esta é minha fila: ", fila.print());
console.log('Está vazia?', fila.isEmpty)

// Inserções na fila
fila.enqueue("Alexandre");
fila.enqueue("João");
fila.enqueue("Maria");
fila.enqueue("José");
fila.enqueue("Pedro");

console.log(fila.print());

//remoção da fila

let atendido = fila.dequeue();
console.log(`Atendido: ${atendido}`);
console.log(fila.print());

//novas inserções
fila.enqueue("Sebastião");
fila.enqueue("Joaquim");
console.log(fila.print());

//observando o inicio da fila
let proximo = fila.peek();
console.log(`Próximo: ${proximo}`);
console.log(fila.print());

//nova remoção
atendido = fila.dequeue();
console.log(`Atendido: ${atendido}`);

console.log("Esta é minha fila: ", fila.print());
console.log('Está vazia?', fila.isEmpty)