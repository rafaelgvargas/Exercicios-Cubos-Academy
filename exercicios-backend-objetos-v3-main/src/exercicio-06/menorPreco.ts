type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
  const precos = {
    loja1: 40.99,
    loja2: 20,
    loja3: 30,
  }
  const menorPreco = produtosEncontrados.reduce((a, b) => {
    return a.preco < b.preco ? a : b
  })

  return menorPreco.loja
}

export default solucao;
