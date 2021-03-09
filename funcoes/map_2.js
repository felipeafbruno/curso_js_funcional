// IMPLEMENTAÇÃO DO MAP
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNomes = item => item.nome
const nomesProdutos = carrinho.meuMap(getNomes)
console.log(nomesProdutos)

const calcularValores = item => item.qtde * item.preco
const valoresConsolidados = carrinho.meuMap(calcularValores)
console.log(valoresConsolidados)
