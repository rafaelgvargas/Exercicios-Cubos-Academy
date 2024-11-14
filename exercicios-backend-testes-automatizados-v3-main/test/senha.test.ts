import senhaValida from "../src/senha";

describe("senhaValida", () => {
    it("deve retornar 'SENHA INVALIDA' quando a senha tiver menos de 4 digitos", () => {
        expect(senhaValida("123")).toBe("SENHA INVÁLIDA")
    })
    it("deve retornar 'SENHA INVALIDA' quando a senha tiver letras", () => {
        expect(senhaValida("123a")).toBe("SENHA INVÁLIDA")
    })
    it("deve retornar 'SENHA VALIDA' quando a senha tiver 4 digitos", () => {
        expect(senhaValida("1234")).toBe("SENHA VALIDA")
    })
})