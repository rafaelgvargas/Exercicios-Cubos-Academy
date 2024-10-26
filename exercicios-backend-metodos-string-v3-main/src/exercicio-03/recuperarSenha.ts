function solucao(numeroCadastrado: string): string {
  return numeroCadastrado.slice(0, 2) + "*".repeat(numeroCadastrado.length - 4) + numeroCadastrado.slice(-2)
}

export default solucao;
