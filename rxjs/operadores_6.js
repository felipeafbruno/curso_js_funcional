// Criando operadores
const { from, Observable } = require('rxjs')

function createPipebleOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next(),
                error: sub.error() || (e => subscriber.error(e)),
                complete: sub.complete() || (e => subscriber.complete(e))
            })
        })
    }
}

function primeiro() {
    return createPipebleOperator(subscriber => ({
        next(v) {
            subscriber.next(v)
            subscriber.complete()
        }
    }))
}

function ultimo() {
    let ultimo
    return createPipebleOperator(subscriber => ({
        next(v) {
            ultimo = v
        },
        complete() {
            if(ultimo !== undefined) {
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
    }))
}

from([1,2,3,4,5])
    .pipe(
        // primeiro(),
        ultimo(),
    )
    .subscribe(console.log)
