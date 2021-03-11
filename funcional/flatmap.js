  const letrasAninhadas = [
    ['O', ['l'], 'á'],
    [' '],
    ['m', ['u', ['n']], 'd', 'o'],
    ['!', '!', '!', '!']
]

// método flat() vai comprir todos os elementos do array em um único array
const letras = letrasAninhadas.flat(Infinity)

// método flatMap primeiro faz o mapeamento dos elementos
// e depois o flat para comprir em um único array
const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)
