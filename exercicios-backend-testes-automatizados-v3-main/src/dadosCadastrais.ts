export default function dadosCadastrais(dados: {nome: string, email: string, senha: string}):boolean | string {
    if (!dados.nome || !dados.email || !dados.senha) {
        return 'Todos os campos são obrigatórios'
    }
    return true
}