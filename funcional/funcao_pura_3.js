let qtdeDeExecucoes = 0

// Função Pura
// Previsível
// retorno depende apenas no valor de entrada
function somar(a, b) {
    qtdeDeExecucoes++ // efeito colateral observável
    return a + b
}

console.log(somar(27 + 64))
console.log(somar(27 + 64))
console.log(somar(27 + 64))
console.log(somar(27 + 64))
console.log(somar(27 + 64))
console.log(somar(27 + 64))
console.log(qtdeExecucoes)
