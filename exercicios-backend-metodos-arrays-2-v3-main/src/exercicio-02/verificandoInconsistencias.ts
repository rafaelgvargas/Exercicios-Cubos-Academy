function solucao(cpfsCadastrados: string[]): string {
  const cpfsValidos = cpfsCadastrados.filter((cpf) => {
    return cpf.length === 11
  })

  if (cpfsValidos.length === cpfsCadastrados.length) {
    return 'PLANILHA VALIDA'
  } else {
    return 'PLANILHA INVALIDA'
  }
}

export default solucao;
