const Conta = require('./conta');

describe('Conta', () => {
  let conta;

  beforeEach(() => {
    conta = new Conta();
  });

  test('Depósito na conta deve aumentar o saldo corretamente', () => {
    const mensagemDeposito = conta.depositarValor(100);
    expect(mensagemDeposito).toBe("Depósito de 100 realizado com sucesso. Novo saldo: 100");
  });

  test('Saque na conta deve diminuir o saldo corretamente', () => {
    conta.depositarValor(200);
    const mensagemSaque = conta.sacar(50);
    expect(mensagemSaque).toBe("Saque de 50 realizado com sucesso. Novo saldo: 150");
  });

  test('Saque na conta com saldo insuficiente deve retornar mensagem de erro', () => {
    const mensagemErroSaque = conta.sacar(500);
    expect(mensagemErroSaque).toBe("Saldo insuficiente para realizar o saque.");
  });

});


