const fs = require('fs')
const path = require('path')

function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)   
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function lerArquivo(caminho) {
    // readdirSync faz a leitura de todo o conteúdo do diretório de forma síncrona
    // Método retorna um array com o nome de todos os arquivos no diretório
    let arquivos = fs.readdirSync(caminho)
        .map(nome_arquivo => path.join(caminho, nome_arquivo))

    return new Promise((resolve, reject) => {
        try {
            resolve(arquivos)
        } catch(e) {
            reject(e)
        }
    })
}

function filtroPorExtensao(extensao) {
    return function(arquivos) {
        return arquivos.filter(arquivo => arquivo.includes(extensao))
    }
}

function lerConteudoArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            // readFileSync() não recebe função callback
            // retorna o conteúdo do caminho informado
            // se um padrão encode é informado o método retorna uma string caso contrario retorna um buffer
            // readFile() do contrario lê o conteúdo inteiro do arquivo assíncronamente
            // e precisa da função callback para retorna(response.send) o conteúdo
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    })
}

function lerConteudoArquivos(caminhos) {
    // all() recebe um array de Promises e retorna caso todos sejam resolvidas
    // se alguma Promise for rejeitada não retorna nada
    return Promise.all(caminhos.map(caminho => lerConteudoArquivo(caminho)))
}

function separarPorLinha(conteudos) {
    const juncaoConteudo = conteudos.reduce((acc, linha) => acc += linha)
    const separadoPorLinhas = juncaoConteudo.split('\n')
    return separadoPorLinhas
}

function removerLinhasVazias(linhas) {
    return linhas.filter(linha => linha.replace('\r', ''))
}

function removerLinhasComElemento(padrao) {
    return function(linhas) {
        return linhas.filter(linha => !linha.includes(padrao))
    }
}

function removerLinhasComNumero(linhas) {
    return linhas.filter(linha => linha.replace(/\d+/g, '').trim())
}

function removerCaracteresEspeciais(simbolos) {
    return function (array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
        })
    }
}

function separarPorPalavras(linhas) {
    const juncaoConteudo = linhas.reduce((acc, linha) => acc += linha)
    const separadoPorLinhas = juncaoConteudo.split(' ')
    return separadoPorLinhas
}

function agruparPalavras(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = {
            elemento: el, qtde
        }
        return acc
    }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem='asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc'? asc : desc)
    }
}  

module.exports = {  
    composicao,
    lerArquivo,
    filtroPorExtensao,
    lerConteudoArquivos,
    separarPorLinha,
    removerLinhasVazias,
    removerLinhasComElemento,
    removerLinhasComNumero,
    removerCaracteresEspeciais,
    separarPorPalavras,
    agruparPalavras,
    ordenarPorAtributoNumerico
}