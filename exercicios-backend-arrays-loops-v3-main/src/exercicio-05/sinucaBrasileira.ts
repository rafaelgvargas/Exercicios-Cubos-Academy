function solucao(jogadorA: number[]): string {
  const Total = 120
  let somajogadorA = 0
    for (let i = 0; i < jogadorA.length; i++) {
      somajogadorA += jogadorA[i]
  }
  const somajogadorB = Total - somajogadorA
  if (somajogadorA > somajogadorB) {
    return 'JOGADOR A GANHOU'
  } else if (somajogadorB > somajogadorA) {
    return 'JOGADOR B GANHOU'
  } else {
    return 'EMPATE'
  }{
    
  }
}
export default solucao;
