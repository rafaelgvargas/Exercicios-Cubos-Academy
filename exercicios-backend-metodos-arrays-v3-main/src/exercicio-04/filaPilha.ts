type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(
  pedidoSolicitado: TPedido,
  pedidos: TPedido[],
  tipoDeAtendimento: TAtendimento
): TPedido[] {
  if (tipoDeAtendimento === "pilha") {
    return [pedidoSolicitado, ...pedidos]
  }
  return [...pedidos, pedidoSolicitado]
}
export default solucao;
