let forma1 = {
    base: 15,
    altura: 12,
    tipo: 'R' // Retângulo
}

let forma2 = {
    base: 10,
    altura: 26,
    tipo: 'T' // Triângulo
}

let forma3 = {
    base: 20,
    altura: 10,
    tipo: 'E' // Elipse
}

let forma4 = {
    base: 7.5,
    altura: 12.3,
    tipo: 'G' // ????
}

let forma5 = {
    base: 'batata',
    altura: 'cebola',
    tipo: 'E'
}

function calcularArea(forma) {
    switch (forma.tipo) {
        case 'R': // Retângulo
            return forma.base * forma.altura;
        case 'T': // Triângulo
            return (forma.base * forma.altura) / 2;
        case 'E': // Elipse
            return (forma.base / 2) * (forma.altura / 2) * Math.PI;
        default:
            return null
    }
}

console.log(`Área do retângulo 15x12: ${calcularArea(forma1)}`);
console.log(`Área do triângulo 10x26: ${calcularArea(forma2)}`);
console.log(`Área da elipse 20x10: ${calcularArea(forma3)}`);
console.log(`Área de (${JSON.stringify(forma4)}): ${calcularArea(forma4)}`);
console.log(`Área de (${JSON.stringify(forma5)}) ${calcularArea(forma5)}`);