// Sempre que a função não é determinista a função não é pura
// Função impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(5, 6))
console.log(gerarNumeroAleatorio(5, 6))
console.log(gerarNumeroAleatorio(5, 6))
console.log(gerarNumeroAleatorio(5, 6))
console.log(gerarNumeroAleatorio(5, 6))