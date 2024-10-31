type TMonstro = {
  nome: string;
  forca: number;
  agilidade: number;
  experiencia: number;
};
function solucao(monstros: TMonstro[]): TMonstro[] {
  const monstrosEvoluidos = monstros.map((monstro) => {
    const experiencia = monstro.experiencia + 10
    return {
      ...monstro,
      experiencia,
    }
  })
  return monstrosEvoluidos
}
export default solucao;
