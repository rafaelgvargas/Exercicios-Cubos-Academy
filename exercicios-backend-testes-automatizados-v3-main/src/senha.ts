export default function senhaValida(senha: string): string {
    if (senha.length < 4) {
        return 'SENHA INVÁLIDA'
    }
    if (!/^\d+$/.test(senha)) {
        return 'SENHA INVÁLIDA'
    }
    return 'SENHA VALIDA'
}
