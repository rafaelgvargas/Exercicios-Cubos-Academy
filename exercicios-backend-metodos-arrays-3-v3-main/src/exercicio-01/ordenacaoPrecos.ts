type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
  if (filtroPreco === "crescente") {
    return precos.sort((a, b) => a - b);
  } else {
    return precos.sort((a, b) => b - a);
  }
  
}
export default solucao;
