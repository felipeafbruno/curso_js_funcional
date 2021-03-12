const { Observable, noop } = require('rxjs') // noop -> no operation

// Observable passa o objeto subscriber com métodos para geração dados e etc
const obs = new  Observable(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é ')
    subscriber.next('uma')
    subscriber.next('biblioteca interessante!')

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Um erro ocorreu...')
    }
})

// OBS: Composição de Funções
// obs.subscribe(
//     valor => console.log(`Valor: ${valor}`),
//     erro => console.log(`Erro: ${erro}`),
//     () => console.log('Fim!')
// )

obs.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
    error(erro) {
        console.log(`Erro: ${erro}`)
    },
    complete() {
        console.log('Fim!')
    }
})
