// Closure é qunado a função "lembra" 
// de seu contexto léxico(local onde foi definida) 
// mesmo quando é executado fora do escopo onde foi definida
const somarXMais3 = require('./closure_escopo')

const x = 1000
console.log(somarXMais3(3))