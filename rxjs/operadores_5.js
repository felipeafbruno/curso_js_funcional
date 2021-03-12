const { of, Observable } = require('rxjs')

function terminadoCom(padrao) {
    return function (fonte) {
        return new Observable(subscriber => {
            fonte.subscribe({
                next(valor) {
                    // subscriber.next(valor)
                    // if(valor.includes(padrao)) subscriber.next(valor)
                    if(Array.isArray(valor)) {
                        novoValor = valor.filter(el => el.endsWith(padrao))
                        subscriber.next(novoValor)
                    } else if(valor.endsWith(padrao)) subscriber.next(valor)
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)
