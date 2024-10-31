type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  const timesFiltrados = times.filter((time) => {
    return time.pais === paisFiltrado
  })
  const timesOrdenados = timesFiltrados.sort((a, b) => {
    return b.quantidadeTitulos - a.quantidadeTitulos
  })
  if (timesFiltrados.length === 0) {
    return 'NAO ENCONTRADO'
  }
  return timesOrdenados
  
}
export default solucao;
