function solucao(comentario: string): boolean {
  const comentariosMaiusculas = comentario.toUpperCase()
  const comentarioProibido = ['COVID', 'PANDEMIA']
  return !comentarioProibido.some(comentarioProibido => comentariosMaiusculas.includes(comentarioProibido))
}
export default solucao;
