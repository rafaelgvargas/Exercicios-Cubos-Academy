function solucao(cpf: string): string {
  
  const cpfValido = cpf.replace('-', '')
  if (cpfValido.length !== 11) {
    return 'CPF INVALIDO'
  }
    const porPartes = cpf.split('-')
    if (porPartes.length !== 2 || porPartes[1].length !== 2) {
      return 'CPF INVALIDO'
    }
  return 'CPF VALIDO'
}

export default solucao;
