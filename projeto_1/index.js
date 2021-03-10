const path = require('path')
const fn = require('./funcoes')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
fn.lerArquivo(caminho)
    .then(fn.filtroPorExtensao('.srt'))
    .then(fn.lerConteudoArquivos) 
    .then(fn.separarPorLinha) 
    .then(fn.removerLinhasVazias)
    .then(fn.removerLinhasComElemento('-->'))
    .then(fn.removerLinhasComNumero)
    .then(fn.removerCaracteresEspeciais(simbolos))
    .then(fn.separarPorPalavras)
    .then(fn.removerLinhasVazias)
    .then(fn.removerLinhasComNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)
