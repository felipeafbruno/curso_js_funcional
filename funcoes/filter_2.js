const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// IMPLEMENTANDO FILTER
Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        let resultado = fn(this[i], i, this)
        if(resultado != false) novoArray.push(this[i])
    }
    return novoArray
}

const qtdeMaiorQueZero = elemento => elemento.qtde > 0
const getNome = item => item.nome

const nomesItensValidos = carrinho
                            .filter(qtdeMaiorQueZero)
                            .map(getNome)

console.log(nomesItensValidos)
