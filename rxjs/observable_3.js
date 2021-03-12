// Desafio Observable
// Criar uma stream de numeros entre min e max
const { Observable, noop } = require('rxjs')

const entre = function(min, max) {
    // Minha Implementação
    // return new Observable(subscriber => {
    //     const aleatorio = parseInt(Math.random() * max - min + 1) + min
    //     subscriber.next(aleatorio)
    // })
    // Implementação da Aula
    return new Observable(subscribe => {
        if(min > max) [min, max] = [max, min]
        for(let i = min; i <= max; i++) {
            subscribe.next(i)
        } 
        subscribe.complete
    })
}

entre(4, 10)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )
