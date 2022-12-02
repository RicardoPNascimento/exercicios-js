function code(entries) {
    let nomes = []
    entries.filter(nota => {
        nota.nota >= 5 ? nomes.push(nota.nome) :0
    })
    return nomes
}

module.exports = code