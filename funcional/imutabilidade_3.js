// freeze() congela o objeto não permitindo a alteração
const pessoa = Object.freeze({
nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Feliz'
    })
})

// Atribuição por Referência
const outraPessoa = pessoa

// Atribuição por Referência Função impura
function alteraPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'Rua ABC'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(novaPessoa)
console.log(pessoa)

// Atribuição por Valor
let a = 3
let b = a

a++
b--
console.log(a, b)
