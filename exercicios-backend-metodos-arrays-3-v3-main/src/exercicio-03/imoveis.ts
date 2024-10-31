type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  const ordem = anuncios.sort ((item1, item2) => {
    return item1.preco - item2.preco
  })
  if (ordem.length === 0) {
    return 'NAO ENCONTRADO'
  }
  return ordem
}
export default solucao;
