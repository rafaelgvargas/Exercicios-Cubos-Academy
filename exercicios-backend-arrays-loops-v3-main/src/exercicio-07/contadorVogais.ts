function solucao(palavra: string): boolean {
  const vogais = ['a', 'e', 'i', 'o', 'u']

    for (let vogal of vogais) {
      for (let letra of palavra ) {
        if (letra === vogal) {
          return true
        }
      }
    }
    return false
}
export default solucao;
