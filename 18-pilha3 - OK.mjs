/* 
   PALÍNDROMO: texto que pode ser lido de trás para frente e
   continua idêntico
*/

import Stack from './lib/Stack.mjs'

let frase = 'Socorram-me, subi no ônibus em Marrocos'

/*
    Problema: inverter a frase para verificar se é um palíndromo
*/

let pilha = new Stack()

// Percore a frase e coloca cada uma das letras dela
// dentro da pilha
for(let i = 0; i < frase.length; i++) {
    pilha.push(frase.charAt(i))     // Insere no final da pilha
}

console.log(pilha.print())

let reverso = ''

while(! pilha.isEmpty) {
    reverso += pilha.pop()          // Retira do final da pilha
}

console.log(reverso)