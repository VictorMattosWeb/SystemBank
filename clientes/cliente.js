const Conta = require('../contas/conta');

class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.conta = null;
    }

    associarConta(conta) {
        if (conta instanceof Conta) {
            this.conta = conta;
            return `${this.nome}, sua conta foi associada com sucesso.`;
        } else {
            return "A associação só é possível com uma instância de Conta.";
        }
    }

    exibirDetalhesConta() {
        if (this.conta) {
            return {
                mensagem: `Detalhes da conta de ${this.nome}:`,
                numeroConta: this.conta.numeroConta,
                saldo: this.conta.verificarSaldo()
            };
        } else {
            return `${this.nome} não possui uma conta associada.`;
        }
    }
}

module.exports = Cliente;
