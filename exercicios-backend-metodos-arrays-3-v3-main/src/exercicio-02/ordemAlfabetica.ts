function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {
  if (ordemAlfabetica) {
    return listaAlunos.sort()
  } else {
    return listaAlunos
  }
}
export default solucao;
