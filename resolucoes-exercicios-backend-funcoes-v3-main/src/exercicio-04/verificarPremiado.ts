// IMPLEMENTE AQUI A SUA FUNÇÃO
type TPessoa = {
  nome: string;
  numeroCartela: number;
};

function verificarPremiado(
  numeroSorteado: number,
  pessoasConcorrendo: TPessoa[]
): string | undefined {
  let vencedor = undefined;
  for (let pessoa of pessoasConcorrendo) {
    if (pessoa.numeroCartela === numeroSorteado) {
      vencedor = pessoa.nome;
      break;
    }
  }
  return vencedor;
}
export default verificarPremiado;
