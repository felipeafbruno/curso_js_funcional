const path = require('path')
const fn = require('./funcoes')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const execucao =  fn.composicao(
    fn.lerArquivo,
    fn.filtroPorExtensao('.srt'),
    fn.lerConteudoArquivos,
    fn.separarPorLinha,
    fn.removerLinhasVazias,
    fn.removerLinhasComElemento('-->'),
    fn.removerLinhasComNumero,
    fn.removerCaracteresEspeciais(simbolos),
    fn.separarPorPalavras,
    fn.removerLinhasVazias,
    fn.removerLinhasComNumero,
    fn.agruparPalavras,
    fn.ordenarPorAtributoNumerico('qtde', 'desc'),
)
execucao(caminho)
    .then(console.log)

// fn.lerArquivo(caminho)
//     .then(execucao)
//     .then(fn.lerConteudoArquivos) 
//     .then(fn.separarPorLinha) 
//     .then(fn.removerLinhasVazias)
//     .then(fn.removerLinhasComElemento('-->'))
//     .then(fn.removerLinhasComNumero)
//     .then(fn.removerCaracteresEspeciais(simbolos))
//     .then(fn.separarPorPalavras)
//     .then(fn.removerLinhasVazias)
//     .then(fn.removerLinhasComNumero)
//     .then(fn.agruparPalavras)
//     .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
//     .then(console.log)
