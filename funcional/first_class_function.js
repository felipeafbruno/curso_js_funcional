// Quando em uma linguagem a Função é tratada como
// valor temos o conceito de First-Class-Function ou
// Função de Primeira Classe tornando possível
// atribuir a Função a uma variável 
const x = 3
const y = function (txt) { // Função é um valor sendo atribuido a constante y
    return `Esse é o texto ${txt}`
}
const z = () => console.log('Executando...')

console.log(x)
console.log(y('Olá'))
z()