/*
    PILHA
    É uma estrutura de dados em que, usando uma lista linear (vetor) como
    base, permite inserções apenas no final e remoções também a partir do
    final.
    Com isso, temos o comportamento conhecido como LIFO = Last In, First Out
    (último a entrar, primeiro a sair).
    Pilhas são usadas em tarefas computacionais que requerem a inversão da
    ordem de entrada dos dados.
*/


//PALÍNDROMO: TEXTO QUE É LIDO DE FORMA INVERSA.

let frase = 'Socorram-me, subi no ônibus em Marrocos';

let vetor = []

for(let i = 0; i < frase.length; i++){
    vetor.push(frase.charAt(i));
}

console.log('Pilha Original: \n', vetor);

// vetor.unshift('X');

// vetor.splice(11, 10, 'S', 'O', 'C', 'O', 'R', 'A', 'M', 'M', 'E');

// vetor.splice(23,2)

// vetor.pop()

let reverso = ''

while(vetor.length > 0){
    reverso = reverso + vetor.pop();
}

console.log('Frase reverso: ',reverso);