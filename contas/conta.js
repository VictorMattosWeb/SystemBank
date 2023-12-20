class Conta {
    constructor(numeroConta, saldo = 0) {
        this.numeroConta = Conta.gerarNumeroConta();
        this.saldo = saldo;
    }

    static gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000);
    }

    depositarValor(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`;
        } else {
            return "O valor do depósito deve ser maior que zero.";
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`;
        } else if (valor <= 0) {
            return "O valor do saque deve ser maior que zero.";
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    }

    verificarSaldo() {
        return `Saldo atual da conta (${this.numeroConta}): ${this.saldo}`;
    }
}

module.exports = Conta;
