// IMPLEMENTE AQUI A SUA FUNÇÃO
function verificarValidade(
  valorLido: number,
  valoresValidos: number[]
): boolean {
  let valido = false;
  for (let valor of valoresValidos) {
    if (valorLido === valor) {
      valido = true;
      break;
    }
  }
  return valido;
}
export default verificarValidade;
