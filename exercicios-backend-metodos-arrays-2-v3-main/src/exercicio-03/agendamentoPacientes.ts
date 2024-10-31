function solucao(tipoItensCarrinho: string[], idadeCliente: number): string {
  const idadeClienteValida = idadeCliente >= 18
  if (idadeClienteValida) {
    return 'COMPRA EFETUADA'
  } else {
    if (tipoItensCarrinho.includes('bebida com alcool')) {
      return 'COMPRA BLOQUEADA'
    } else {
      return 'COMPRA EFETUADA'
  }
  }

}
export default solucao;
