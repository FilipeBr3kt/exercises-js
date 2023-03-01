// exibe se um dia é dia útil, fim de semana ou dia inválido

function DiaSemana(dia) {
    switch(dia) {
        case 1: case 7:
            console.log('Fim de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia da semana')
            break
        default:
            console.log('Dia inválido')
    }
}

DiaSemana(1)
DiaSemana(2)
DiaSemana(3)
DiaSemana(4)
DiaSemana(5)
DiaSemana(6)
DiaSemana(7)
DiaSemana('a')