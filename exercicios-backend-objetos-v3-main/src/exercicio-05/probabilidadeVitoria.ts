type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  const { probabilidades } = dados

  if (probabilidades.length === 0) {
    return 'DADOS INSUFICIENTES'
  }
  const soma = probabilidades.reduce((a, b) => a + b, 0)
  const media = soma / probabilidades.length

  return media
}
export default solucao;
