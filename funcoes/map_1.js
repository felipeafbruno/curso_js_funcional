// MAP 
// function callback par ao map recebe três parametros
// n -> elemento, i -> indice e a -> array
const nums = [1,2,3,4,5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro))


const nomes = ['Felipe', 'Bernardo', 'Furtuna']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes.map(primeiraLetra))
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNomes = item => item.nome
const nomesProdutos = carrinho.map(getNomes)
console.log(nomesProdutos)

const calcularValores = item => item.qtde * item.preco
const valoresConsolidados = carrinho.map(calcularValores)
console.log(valoresConsolidados)