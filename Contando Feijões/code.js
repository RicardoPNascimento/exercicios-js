function countBs(word) {
    return countChar(word, 'B')
}

function countChar(word, char) {
    var i = 0
    word.split('').forEach(_ => {
        _ === char ? i++ : 0
    })
    return (i)
}

module.exports = {
    countBs,
    countChar
}