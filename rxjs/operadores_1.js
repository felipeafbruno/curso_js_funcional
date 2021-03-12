// Existem dois tipos de Operadores
// Operadores de Criação
// Operadores Pipeble ou Operadores Encadeávies

// Operador de Criação -> from é um dos operadores de criação que cria um 
// Observable apartir de um objeto ou array ou promisse
const { from } = require('rxjs') 
const { last, map } = require('rxjs/operators') // Operador Pipeble

// método pipe() permite o uso do operadores encadeáveis
from([1, 2, 3, 'Bernado', false, 'último'])
    .pipe(
        last(), 
        map(v => v[0]),
        map(v => `A letra encontrado foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    })
