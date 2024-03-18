"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBrancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBrancariaPessoaFisica extends ContaBrancaria {
    depositar(valor) {
        this.saldo = valor;
    }
}
const contaDoPedro = new ContaBrancariaPessoaFisica(123456);
ContaBrancaria.retornaNumeroDoBanco();
