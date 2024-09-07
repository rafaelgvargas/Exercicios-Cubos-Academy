export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  if (notaAlunoA - notaAlunoB < 1.5 ) {
    return 'DUPLA VALIDA'
  } else {
    return 'DUPLA INVALIDA'
  }
}