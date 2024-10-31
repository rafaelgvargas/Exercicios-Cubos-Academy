function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  const corresponde = cpfsCadastrados.includes(cpfDigitado);
  if (corresponde) {
    return "CPF JA CADASTRADO";
  }
  return "CADASTRO REALIZADO COM SUCESSO";
}
export default solucao;
