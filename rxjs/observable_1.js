const { Observable } = require('rxjs')

/**
 * Na Promise resolve gera um dado uma unica vez
 * já no Observable o método next() pode 
 * gerar multiplos dados em uma unica chamada
*/

const promise = new Promise(resolve => {
    resolve('Promise...')
})
promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer1...')
    subscriber.next('Observer2...')
    subscriber.next('Observer3...')
    setTimeout(() => {
        subscriber.next('Observer4...')
        subscriber.complete() // finaliza o Observable
    })
})
obs.subscribe(console.log)
