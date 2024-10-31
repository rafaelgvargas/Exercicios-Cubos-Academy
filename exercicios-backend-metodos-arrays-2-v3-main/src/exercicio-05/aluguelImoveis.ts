type TImovel = {
  titulo: string;
  descricao: string;
  preco: number;
};
function solucao(anuncios: TImovel[], precoMaximo: number): TImovel[] | string {
  const filtro = anuncios.filter((anuncio) => {
    return anuncio.preco <= precoMaximo
  })

  if (filtro.length > 0) {
    return filtro
  } else {
    return 'NAO ENCONTRADO'
  }
}
export default solucao;
