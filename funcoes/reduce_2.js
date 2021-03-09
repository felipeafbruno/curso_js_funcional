// IMPLEMENTANDO REDUCE
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getTotalProduto = item => item.qtde * item.preco
const totalGeral = (total, preco) => total += preco
const getMedia = function (acc, preco) {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + preco
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

Array.prototype.meuReduce = function(fn, valorInicial) {
    let acc = valorInicial || 0
    for(let i = 0; i < this.length; i++) {
        let resultado = fn(acc, this[i], i, this)
        acc = resultado
    }
    return acc
}

const totalCarrinho = carrinho
    .map(getTotalProduto)
    .meuReduce(totalGeral)
    // .meuReduce(totalGeral, { qtde: 0, total: 0, media: 0 })

console.log(totalCarrinho)
