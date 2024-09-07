export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  const calculototal = marcacaoRoleta * precoPassagem
  
  if (quantidadeCaixa === calculototal) {
      return 'TUDO CERTO'
    } else if(quantidadeCaixa > calculototal) {
      return 'DINHEIRO SOBRANDO'
    } else {
    return 'DINHEIRO FALTANDO'
  }
}
