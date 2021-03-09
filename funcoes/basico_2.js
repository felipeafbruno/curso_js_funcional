// FUNÇÃO COMO PARAMETRO 
function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Boa tarde')
}

function executar(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executar(bomDia)
executar(boaTarde)


// RETORNAR UMA FUNÇÃO APARTIR OUTRA FUNÇÃO
function potencia(base, exp) {
    return function(exp) {
        return Math.pow(base, exp)
    } 
}

const bits128 = potencia(2)
console.log(bits128(128))

const resultadoPotencia = potencia(2)(4)
console.log(resultadoPotencia)
