import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque();

// console.log(listaCompras.print());
// console.log("A lista de comrpas está vazia? ",listaCompras.inEmpty);

// Adicionando itens na lista (Alimentos)
listaCompras.insertFront('Arroz');
listaCompras.insertFront('Feijão');
listaCompras.insertFront('Macarrão');
listaCompras.insertFront('Batata');
console.log(listaCompras.print());

// Adicionando itens na lista (Higiene/Limpeza)
listaCompras.insertBack('Sabão');
listaCompras.insertBack('Água Sanitária');
listaCompras.insertBack('Desinfetante');
listaCompras.insertBack('Desodorante');
console.log(listaCompras.print());

// Adicionando itens na lista (Alimentos)
listaCompras.insertFront('Café');
listaCompras.insertFront('Leite');
console.log(listaCompras.print());

// Adicionando itens na lista (Higiene/Limpeza)
listaCompras.insertBack('Shampoo');
listaCompras.insertBack('Amaciante');
console.log(listaCompras.print());

// Desisti de comprar o Amaciante
let removido = listaCompras.removeBack();
console.log(`Removido: ${removido}`);
console.log(listaCompras.print());

//Passei pelo corredor e peguei o Leite e removi o leite da lista
removido = listaCompras.removeFront();
console.log(`Removido: ${removido}`);
console.log(listaCompras.print());

let proximo = listaCompras.peekFront();
console.log(`Próximo: ${proximo}`);

let ultimo = listaCompras.peekBack();
console.log(`Último: ${ultimo}`);

console.log(listaCompras.print());