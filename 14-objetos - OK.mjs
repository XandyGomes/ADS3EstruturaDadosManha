let forma1 = {
    base: 15,
    altura: 12,
    tipo: 'R'   // Retângulo
}

let forma2 = {
    base: 10,
    altura: 26,
    tipo: 'T'   // Triângulo
}

let forma3 = {
    base: 20,
    altura: 10,
    tipo: 'E'   // Elipse
}

let forma4 = {
    base: 7.5,
    altura: 12.3,
    tipo: 'G'   // ???
}

let forma5 = {
    base: 'batata',
    altura: 'cebola',
    tipo: 'E'
}

function calcArea(forma) {
    switch(forma.tipo) {
        case 'R':   // Retângulo
            return forma.base * forma.altura
        case 'T':   // Triângulo
            return forma.base * forma.altura / 2
        case 'E':   // Elipse
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:    // Forma desconhecida
            return null
    }
}

console.log(`Área de um retângulo de 15x12: ${calcArea(forma1)}`)
console.log(`Área de um triângulo de 10x26: ${calcArea(forma2)}`)
console.log(`Área de uma elipse de 20x10: ${calcArea(forma3)}`)
console.log(`Área de (${JSON.stringify(forma4)}): ${calcArea(forma4)}`)
console.log(`Área de (${JSON.stringify(forma5)}): ${calcArea(forma5)}`)

/*
    CONCLUSÃO
    O objeto que é passado para a função calcArea(), para resultar em
    um cálculo válido, precisa ter algumas características específicas:
    1) Precisa ter as propriedades "base", "altura" e "tipo"
    2) As propriedades "base" e "altura" devem conter valores numéricos
       maiores que zero
    3) A propriedade "tipo" deve aceitar apenas os valores 'R', 'T' ou 'E'

    Problema: a linguagem JavaScript permite a livre criação de objetos,
    sem imposição de regras ou características obrigatórias.

    Solução: declarar uma CLASSE que contenha as regras de existência de 
    um objeto e criar os objetos necessários a partir da classe.

    ANALOGIA:
    Classe -> forma de bolo (asssadeira)
    Objeto -> bolo ou outra receita que usará a forma

    Por exemplo, uma forma redonda com furo no meio (forma de pudim).
    Com essa forma, podem ser feito: pudim, bolo de fubá, cuscuz paulista, etc.
    Os ingredientes das receitas variam, mas todas sairão com a forma redonda
    com um furo no meio imposta pela forma.

*/