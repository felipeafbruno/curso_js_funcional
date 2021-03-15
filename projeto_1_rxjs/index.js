const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { toArray, map } = require('rxjs/operators')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
    .pipe(
        fn.filtroPorExtensao('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerTextoComNumeros(),
        fn.removerCaracteresEspeciais(simbolos),
        fn.separarTextoPor(' '),
        fn.removerTextoVazio(),
        fn.removerTextoComNumeros(),
        toArray(),
        fn.agruparPalavras(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)