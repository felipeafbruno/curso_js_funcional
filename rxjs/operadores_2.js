const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')

// concatAll -> transforma um Higher-Order Observable em um First-Order Observable
// concatAll retorna elemento por elemento do Observable
const { map, concatAll } = require('rxjs/operators')


ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/felipeafbruno/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repos => repos.full_name)
    )
    .subscribe(console.log)
