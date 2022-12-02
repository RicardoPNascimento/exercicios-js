function code(entries) {
    return entries.reduce((acc, {value, type}) => {
        return type === 'CREDIT' ? acc + value : acc - value
    }, 0)
}

module.exports = code