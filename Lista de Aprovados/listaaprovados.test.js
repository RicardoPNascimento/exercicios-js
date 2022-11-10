const code = require("./code")

const notes = [
    { "nota": 10, "nome": "Lucas" },
    { "nota": 8, "nome": "Larissa" },
    { "nota": 4, "nome": "Antonio" },
    { "nota": 2, "nome": "Caio" },
    { "nota": 1, "nome": "Madalena" },
    { "nota": 5, "nome": "Estela" },
]

describe("Lista de aprovados", () => {
    it("Deve retornar os nomes aprovados corretamente", () => {
        const expected = ["Lucas", "Larissa", "Estela"]
        const result = code(notes)
        expect(result).toEqual(expected)
    })
})