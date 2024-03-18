class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBrancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBrancariaPessoaFisica extends ContaBrancaria {
    depositar(valor: number): void {
        this.saldo = valor;
    }
}

const contaDoPedro = new ContaBrancariaPessoaFisica(123456)
ContaBrancaria.retornaNumeroDoBanco()