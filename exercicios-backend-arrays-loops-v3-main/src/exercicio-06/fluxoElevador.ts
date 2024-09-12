function solucao(botoesApertados: string[]): string {
  let botoesA1 = 0
  let botoesA2 = 0
  for (let i = 0; i < botoesApertados.length; i++) {
      if (botoesApertados[i]=== 'A1') {
        botoesA1++
      } else if(botoesApertados[i] === 'A2'){
        botoesA2++
      }  
    }  
    if (botoesA1 > botoesA2){
    return 'NERD'
  } else if (botoesA2 > botoesA1) {
    return 'ATLETA'
  } else {
    return 'DIVERSIFICADO'
  }
}

export default solucao;
