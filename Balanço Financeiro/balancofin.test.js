const code = require("./code")

const balance = [
    { "value": 23.53, "type": "CREDIT" },
    { "value": 47.32, "type": "DEBIT" },
    { "value": 17.22, "type": "DEBIT" },
    { "value": 5.12, "type": "DEBIT" },
    { "value": 199.23, "type": "CREDIT" }
]

describe("Balanço Financeiro", () => {
    it("Deve calcular o balanço financeiro corretamente", () => {
        const result = code(balance)
        expect(result).toBe(153.1)
    })
})