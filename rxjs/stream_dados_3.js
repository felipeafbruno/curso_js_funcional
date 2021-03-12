const { interval } = require('rxjs')

// interval é um operador de criação
const gerarNumeros = interval(500)

// subscribe registra um observable
const subscription1 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})
const subscription2 = gerarNumeros.subscribe(console.log)

// retirar a subinscrição do observable 
setTimeout(() => subscription1.unsubscribe(), 8000)
setTimeout(() => subscription2.unsubscribe(), 6000)
