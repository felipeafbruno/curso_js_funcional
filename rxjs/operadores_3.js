// Criando um operador
const { Observable, observable } = require('rxjs')

function of(tempo, ...elementos) {
    return new Observable(subscriber => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if(elementos.length === i + 1) {
                    subscriber.complete()
                }
            }, tempo * (i + 1))
        })
    })
}

of(1000, 1,2,3,4,5,6,7,8,9,'Bernado',false,[12,13,15])
    .subscribe(console.log)