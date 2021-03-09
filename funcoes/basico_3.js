// ARROW FUNCTION
const boaNoite = () => console.log('Boa Noite!!!')
boaNoite()

const saudacao = (nome) => `Fala ${nome}, beleza?!`
// "Tudo bem " +nome+ "!!!"

console.log(saudacao('Bernardo'))

 
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0 
    for(let n of numeros) {
        total += n
    }
    return total
} 

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9))

// ARROW FUNCTION 
const potencia = base => {
    return exp => Math.pow(base, exp)
}

// THIS
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}

const numeros = [1,2,3,4,5,6]
numeros.ultimo()
numeros.primeiro()
