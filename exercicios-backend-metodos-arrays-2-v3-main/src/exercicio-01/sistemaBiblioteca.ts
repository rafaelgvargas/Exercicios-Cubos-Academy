function solucao(livros: string[], livroProcurado: string): string {
  const livroEncontrado = livros.indexOf(livroProcurado)
  if (livroEncontrado !== -1) {
    return `O LIVRO ESTA NA POSICAO ${livroEncontrado + 1}`
  } else {
    return "NENHUM LIVRO ENCONTRADO"
  }
}
export default solucao;
