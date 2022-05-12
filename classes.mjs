class FormaGeometrica {
    #base
    #altura
    #tipo

    constructor(base, altura, tipo) {
        // o construtor  recebe dados externos: base, altura e tipo e os
        // armazena em seus atrubutos internos #base, #altura e #tipo
    
    //Validações
    // if(typeof base !== 'number' || base <= 0) {
    //     throw new Error('ERRO: base precisa ser numérica e maior que zero');
    // }

    // if(typeof altura !== 'number' || altura <= 0) {
    //     throw new Error('ERRO: altura precisa ser numérica e maior que zero');
    // }

    // if(typeof tipo !== 'R' && tipo !== 'T' && tipo !== 'E') {
    //     throw new Error('ERRO: tipo precisa ser : R, T ou E');
    // }

    this.#base = base;
    this.#altura = altura;
    this.#tipo = tipo;

    // this.base = base;
    // this.altura = altura;
    // this.tipo = tipo;

    }

    // Funções getter: têm a finalidade de tornar visível o atributo
    //interno privado de uma classe para o mundo externo
    get base() {
        return this.#base;
    }

    get altura() {
        return this.#altura;
    }

    get tipo() {
        return this.#tipo;
    }

    //Funções setter: permite que o valor de atributos privados seja alterados
    // do lado de fora da classe
    //Validações
    set base(valor) {
        if(typeof valor !== 'number' || valor <= 0) {
            throw new Error('ERRO: base precisa ser numérica e maior que zero');
        }
        this.#base = valor;
    }

    set altura(valor) {
        if(typeof valor !== 'number' || valor <= 0) {
            throw new Error('ERRO: altura precisa ser numérica e maior que zero');
        }
        this.#altura = valor;
    }

    set tipo(valor) {
        if(typeof valor !== 'R' && valor !== 'T' && valor !== 'E') {
            throw new Error('ERRO: tipo precisa ser : R, T ou E');
        }
        this.#tipo = valor;
    }

    calculaArea() {
        switch(this.tipo){
            case 'R':
                return this.base * this.altura;
            case 'T':
                return (this.base * this.altura) / 2;
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI;
        }
    }

}

let forma1 = new FormaGeometrica(15, 16, 'E') // chamando o construtor

console.log(forma1.base, forma1.altura, forma1.tipo);