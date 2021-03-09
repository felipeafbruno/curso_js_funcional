const carrinho = [
    { nome: 'Impressora', qtde: 0, preco: 649.50, fragil:true },
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil:true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil:false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil:false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil:true },
]

// 1. fragil: true 
// 2. qtde: 4, preco: 27.10 -> totais
// 3. medias totais

const produtoFragil = item => item.fragil == true
const getTotalProduto = item => item.qtde * item.preco
const getMedia = (total, preco, _, array) => total += preco / array.length
const getMedia2 = (acc, preco) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + preco
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const resultado = carrinho
    .filter(produtoFragil)
    .map(getTotalProduto)
    .reduce(getMedia2, { qtde:0, total: 0, media: 0 })
    
console.log(resultado)
