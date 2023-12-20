const Cliente = require('./clientes/cliente');
const Conta = require('./contas/conta');

// Criar instâncias de Cliente e Conta
const cliente1 = new Cliente("João");
const conta1 = new Conta();

// Associar a conta ao cliente
console.log(cliente1.associarConta(conta1));

// Realizar operações na conta
console.log(conta1.depositarValor(Number(1000)));
console.log(conta1.sacar(500));

// Exibir detalhes da conta do cliente
console.log(cliente1.exibirDetalhesConta());
