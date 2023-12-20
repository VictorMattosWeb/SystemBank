const Conta = require('../contas/conta');
const Cliente = require('./cliente');

describe('Cliente', () => {
  let cliente;
  let conta;

  beforeEach(() => {
    cliente = new Cliente('João');
    conta = new Conta();
  });

  test('Associação de conta ao cliente deve funcionar corretamente', () => {
    const mensagemAssociacao = cliente.associarConta(conta);
    expect(mensagemAssociacao).toBe("João, sua conta foi associada com sucesso.");
  });

  test('Exibição de detalhes da conta do cliente sem conta associada deve retornar mensagem de erro', () => {
    const mensagemErroExibicao = cliente.exibirDetalhesConta();
    expect(mensagemErroExibicao).toBe("João não possui uma conta associada.");
  });

});
