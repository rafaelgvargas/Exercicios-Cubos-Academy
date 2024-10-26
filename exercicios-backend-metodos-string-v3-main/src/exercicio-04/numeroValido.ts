function solucao(endereco: string): boolean {
  
  const partes = endereco.split(",")
    
  if (partes.length < 4) {
    return false
  }  

  const numeroDaCasa = partes[1].trim()
  
  const numeroValido = /^(\d{0,9})$/
  if (numeroValido.test(numeroDaCasa)) {
    return true
  } else {
    return false
  }  
}
export default solucao;
