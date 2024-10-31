type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(
  usuariosCadastrados: TUsuario[],
  novoUsuario: TUsuario
): TUsuario[] | string {
  const corresponde = usuariosCadastrados.some(
    (usuario) => usuario.email === novoUsuario.email
  )
  if (corresponde) {
    return "E-MAIL INVALIDO"
  }
  return [...usuariosCadastrados, novoUsuario]
}
export default solucao;
