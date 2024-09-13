function solucao(notas: number[]): number {
  let promotores = 0
  let detratores = 0
  const total = notas.length

  for (let i = 0; i < total; i++){
    if (notas[i] >=9) {
      promotores++
    } else if (notas[i] <=6) {
      detratores++
    }
  }
  
  const nps =((promotores - detratores)/ total) * 100

  return nps
}

export default solucao;
