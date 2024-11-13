export default function calculoCompras(compra: number, venda: number): string {
    const resultado= venda - compra

    if (resultado > 0) {
        return `O valor do lucro é: ${resultado}`
    } else if (resultado < 0) {
        return `O valor do prejuizo é: ${Math.abs(resultado)}`
    } else {
        return 'Venda a preço de custo'
    }
}