function loop() {
    var str = "#";
    let i = 1
    while (i < 9) {
        console.log(str.repeat(i));
        i++;
    }
}

module.exports = loop