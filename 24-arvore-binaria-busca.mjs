import BinarySearchTree from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(13)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

// Percurso em-ordem
let percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Percurso em-ordem:', percurso)

// Percurso pré-ordem
percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log('Percurso pré-ordem:', percurso)

// Percurso pós-ordem
percurso = []
arvore.postOrderTraversal(val => percurso.push(val))
console.log('Percurso pós-ordem:', percurso)

/********************************************** */
// TESTES DE REMOÇÃO
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('ANTES DAS REMOÇÕES:', percurso)

// Remoção de um nodo de grau 0
arvore.remove(64)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Após a remoção do 64:', percurso)

// Remoção de um nodo de grau 1
arvore.remove(1)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Após a remoção do 1:', percurso)

// Remoção de um nodo de grau 2
arvore.remove(15)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Após a remoção do 15:', percurso)

// Remoção da RAIZ (grau 2)
arvore.remove(48)
percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Após a remoção do 48:', percurso)

// Descobrindo qual nodo assumiu a posição da raiz:
// fazendo um percurso pré-ordem e capturando o primeiro valor
percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log(`O novo valor na raiz é ${percurso[0]}`)

/******************************************************* */
// TESTES DE BUSCA

let existe13 = arvore.search(13)
let existe23 = arvore.search(23)
let existe40 = arvore.search(40)
let existe57 = arvore.search(57)
console.log({existe13, existe23, existe40, existe57})