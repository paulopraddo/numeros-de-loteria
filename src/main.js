import chalk from 'chalk'

function sorteiaNumero(maximo) {
    return Math.round(Math.random() * maximo)
}

function apostador(maximo) {
    
    let arrayDasApostas = []
    let i = 0

    while(i < 5) {
        let numeroSorteado = sorteiaNumero(maximo)
        if(arrayDasApostas.includes(numeroSorteado) == false) {
            arrayDasApostas.push(numeroSorteado)
            i++
        }
    }
    return arrayDasApostas
}

console.log(chalk.green(apostador(101)))
