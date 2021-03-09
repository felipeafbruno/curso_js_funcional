// SOMAR(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const resultado = somar(1)(2)(3)
console.log(resultado)


// CALCULAR(3)(7)(FN)
const multplicacao = function (n1, n2) {
    return n1 * n2
}
const soma = function (n1, n2) {
    return n1 + n2
}
const subtracao = function (n1, n2) {
    return n1 - n2
}

function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}

console.log('Soma ', calcular(1)(2)(soma))
console.log('Multiplicar ', calcular(2)(5)(multplicacao))
console.log('Subtrair ', calcular(10)(4)(subtracao))
