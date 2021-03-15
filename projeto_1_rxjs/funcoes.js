const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            // readFileSync() não recebe função callback
            // retorna o conteúdo do caminho informado
            // se um padrão encode é informado o método retorna uma string caso contrario retorna um buffer
            // readFile() do contrario lê o conteúdo inteiro do arquivo assíncronamente
            // e precisa da função callback para retorna(response.send) o conteúdo
            // readdirSync faz a leitura de todo o conteúdo do diretório de forma síncrona
            // Método retorna um array com o nome de todos os arquivos no diretório
            fs.readdirSync(caminho)
                .forEach(arquivo => {
                    subscriber.next(path.join(caminho, arquivo))
                }) 
            subscriber.complete()
        } catch(e) {
            subscriber.error(e)
        }
    })
}

function filtroPorExtensao(extensao) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(extensao)) {
                subscriber.next(texto)
            }
        }
    }))
}

function lerArquivo() {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {
                    encoding: 'utf-8'
                })
                subscriber.next(conteudo.toString()) 
            } catch(e) {
                subscriber.error(e)
            }
        }
    }))
}

function separarTextoPor(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(conteudo) {
            conteudo.split(padraoTextual).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function removerTextoVazio() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if(texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerTextoComNumeros() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if(num !== num) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerCaracteresEspeciais(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const novoTexto = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)
            subscriber.next(novoTexto)
        }
    })) 
}

function agruparPalavras() {
    return createPipeableOperator(subscriber => ({
        next(palavras) {
            const agrupado = Object.values(palavras.reduce((acc, palavra) => {
                const el = palavra.toLowerCase()
                const qtde = acc[el] ? acc[el].qtde + 1 : 1
                acc[el] = {
                    elemento: el, qtde
                }
                return acc
            }, {}))
            subscriber.next(agrupado)
        }
    }))
}

module.exports = {  
    lerDiretorio,
    filtroPorExtensao,
    lerArquivo,
    separarTextoPor,
    removerTextoVazio,
    removerTextoComNumeros,
    removerCaracteresEspeciais,
    agruparPalavras,
}