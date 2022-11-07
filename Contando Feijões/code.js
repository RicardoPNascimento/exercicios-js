function countBs(word) {
    let nome = word.split('')
    let i = 0
    nome.forEach(b => {
        if (b.includes('B')) {
            i++
        }
    })
    return (i)
}

function countChar(word, char) {
    let nome = word.split('')
    let i = 0
    nome.forEach(b => {
        if (b.includes(char)) {
            i++
        }
    })
    return (i)
}

module.exports = {
    countBs,
    countChar
}