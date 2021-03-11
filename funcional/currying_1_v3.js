// Lazy Evaluation
// Recurso da programação funcional que consiste em 
// receber tardiamente parte ou partes do código
function textoComTamanhoEntre(min, max, erro, texto) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                const tamanho = (texto || '').trim().length

                if(tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

// Lazy Evaluation
function aplicarNomeValido(fn) {
    return function (valor) {
        try {
            return fn(valor)
        } catch(e) {
            return {erro: e}
        }
    } 
}

const p1 = {
    nome: 'A',
    preco: 14.99,
    desc: 0.25
}
const p2 = {
    nome: 'AB',
    preco: 14.99,
    desc: 0.25
}

// Grande ganho é poder criar versões intermediarias ou parciais 
// da função que implementa Lazy Evaluation
const forcarTamanhoPadra = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadra('Nome Produto inválido!')
const validarNomeProduto = aplicarNomeValido(forcarNomeProdutoValido)

console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))
