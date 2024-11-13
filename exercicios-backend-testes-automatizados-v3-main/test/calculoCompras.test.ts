import calculoCompras from '../src/calculoCompras'

describe ("calculoCompras", () => {
    it ('deve retornar o valro do lucro quando a venda for maior que a compra', () => {
        const compra = 100
        const venda = 150
        const resultado = calculoCompras(compra, venda)
        expect(resultado).toBe('O valor do lucro é: 50')
    })

    it ('deve retornar o valro do prejuizo quando a compra for maior que a venda', () => {
        const compra = 340
        const venda = 300
        const resultado = calculoCompras(compra, venda)
        expect(resultado).toBe('O valor do prejuizo é: 40')
    })

    it ("deve retornar 'Venda a preço de custo' quando a compra for igual à venda", () => {
        const compra = 100
        const venda = 100
        const resultado = calculoCompras(compra, venda)
        expect(resultado).toBe('Venda a preço de custo')
    })
})