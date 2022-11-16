const isEven = require("../Par ou Impar/code");

class NumberHelper {
    static isEven(num) {
        return isEven(num)
    }

    static isPositive(num) {
        return num > 0
    }

    static isNegative(num) {
        return num < 0
    }
}

module.exports = NumberHelper