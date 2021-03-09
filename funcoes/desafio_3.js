const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const exibirConteudo = function(caminho) {
    return new Promise(resolve => {
        // ENTRE OS TRÊS PARAMETROS QUE READFILE RECEBE
        // TEMOS A CALLBACK E ESSA FUNÇÃO DEVE EXIBIR O CONTEÚDO
        // DO ARQUIVO LIDO APARTIR DE UM CONSOLE.LOG OU ALGUM OUTRO MÉTODO
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })  
}

exibirConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é : ${conteudo}`)
    .then(console.log)
