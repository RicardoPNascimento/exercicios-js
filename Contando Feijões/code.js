function countBs(word) {
    var i = 0
    word.split('').forEach(_ => {
        _ === 'B' ? i++ : 0
    })
    return (i)
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