const code = require("./code")
console.log = jest.fn()

const TEST = {
    nome: "Lucas",
    cabelo: "Preto",
    monitor: "Grande",
    copo: "Transparente",
    prato: "Branco",
    sexo: "Masculino"
}

describe("Meu Objeto", () => {
    it("Deve dar console.log corretamente", () => {
        code(TEST)
        expect(console.log).toHaveBeenNthCalledWith(1, "Meu nome é Lucas")
        expect(console.log).toHaveBeenNthCalledWith(2, "Meu cabelo é Preto")
        expect(console.log).toHaveBeenNthCalledWith(3, "Meu monitor é Grande")
        expect(console.log).toHaveBeenNthCalledWith(4, "Meu copo é Transparente")
        expect(console.log).toHaveBeenNthCalledWith(5, "Meu prato é Branco")
        expect(console.log).toHaveBeenNthCalledWith(6, "Meu sexo é Masculino")
    })
})