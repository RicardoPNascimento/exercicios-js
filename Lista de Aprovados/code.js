function code(entries) {
    return entries.reduce((prev, {nota, nome}) => {
            return nota >= 5 ? [...prev, nome] : [...prev]
        }, []
    )
}

module.exports = code