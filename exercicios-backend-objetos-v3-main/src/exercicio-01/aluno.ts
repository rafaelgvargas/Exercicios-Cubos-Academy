type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  const TAluno: TAluno = {
    matricula,
    nome,
    idade,  
  } 
  return TAluno
  
}

export default solucao;
