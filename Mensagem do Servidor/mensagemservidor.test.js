const code = require("./code")
const mockGetUsername = jest.fn()
const mockGetNotifications = jest.fn()

jest.mock("./helper.js", () => ({
    getUsername: () => mockGetUsername,
    getNotifications: () => mockGetNotifications
}))

describe("Mensagem do Servidor", () => {
    it("Deve retornar a mensagem corretamente", () => {
        mockGetUsername.mockReturnValue("Um Nome Qualquer")
        const message = "Olá {{user_name}}"
        const expected = "Olá Um Nome Qualquer"
        const result = code(message)
        expect(result).toEqual(expected)
    })

    it("Deve retornar a mensagem corretamente", () => {
        mockGetUsername.mockReturnValue("L")
        mockGetNotifications.mockReturnValue("1")
        const message = "{{user_name}} {{user_name}}, {{notifications}} {{notifications}}"
        const expected = "L L, 1 1"
        const result = code(message)
        expect(result).toEqual(expected)
    })

    it("Deve retornar a mensagem corretamente", () => {
        mockGetUsername.mockReturnValue("Teste")
        mockGetNotifications.mockReturnValue("3")
        const message = "{{user_name}} => {{notifications}}"
        const expected = "Teste => 3"
        const result = code(message)
        expect(result).toEqual(expected)
    })
})