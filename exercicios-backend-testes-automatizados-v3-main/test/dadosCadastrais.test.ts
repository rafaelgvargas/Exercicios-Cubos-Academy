import dadosCadastrais from "../src/dadosCadastrais";

describe("dadosCadastrais", () => {
    it("deve retornar mensagem de erro se alguns campos estiverem vazios", () => {
        const dados = {
            nome: "Shaolin",
            email: "",
            senha: "1234",
        }
        expect(dadosCadastrais(dados)).toBe('Todos os campos são obrigatórios')
    })

    it("deve retornar true se todos os campos estiverem preenchidos", () => {
        const dados = {
            nome: "Shaolin",
            email: "shaolin@gmail.com",
            senha: "1234",
        }
        expect(dadosCadastrais(dados)).toBe(true)
    })
})
