function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(v => `Valor: ${valor}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))