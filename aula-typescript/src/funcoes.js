"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// void
function teste() {
    if (10 > 5) {
        return 'dez mais que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
