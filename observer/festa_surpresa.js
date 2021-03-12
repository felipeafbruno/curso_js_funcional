const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

// Observer
function namorada() {
    console.log('N: Apagar as luzes...')
    console.log('N: Pedir silêncio...')
    console.log('N: Surpresa!!!')
}

// Observer
// O Observer pode tranquilamente receber 
// o evento de respota passado na notificação do Subject
function sindico(evento) {
    console.log('S: Monitorando o barulho!')
    console.log(`S: evento -> ${evento.resp}`)
    console.log(`S: evento -> ${evento.data}`)
}

// Subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            // Observers são notificados
            (interessados || []).forEach(obs => obs({resp, data: Date.now() }))
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}
/**
 * Chamada da Função porteiro -> receber dois 'observers' namorada e sindico
 * porteiro é o 'subject' que monitora o disparao de evento
 */
porteiro([namorada, sindico])