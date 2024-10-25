function solucao(email: string): string {
  if (email.includes("@")) {
    return 'VALIDO'
  } else {
    return 'INVALIDO'
  }
}
export default solucao;
