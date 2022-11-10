function code(meuObjeto) {
    Object.keys(meuObjeto).forEach(nome => console.log("Meu " + nome + " " + "é" + " " + meuObjeto[nome]));
}

module.exports = code