// Funções que operam sobre outras Funções
// Funções que recebem como argumento ou retornam Funções
// Este recurso da linguagem é conhecido como Higher Order Function
function executar(fn, ...params) { // passando função fn como argumento
    return function(textoInicial) { // retornado uma função
        return `${textoInicial} ${fn(...params)}`
    }
}

function somar(a, b, c) {
    return a + b + c 
}

function multi(a, b, c) {
    return a * b * c
}

const r1 = executar(somar, 1, 2, 3)('O Resultado da soma é ')
const r2 = executar(multi, 4, 5, 6)('O Resultado da multiplicação é ')

console.log(r1)
console.log(r2)