function avaliaSalario(salario, plano) {
    switch(plano) {
        case 'A':
            return (salario * 1.1).toFixed(2)
            break   
        case 'B':
            return (salario * 1.15).toFixed(2)
            break
        case 'C':
            return (salario * 1.2).toFixed(2)
            break
        default:
            'Plano inválido!'
    }
}

console.log(avaliaSalario(1500, 'A'))
console.log(avaliaSalario(5000, 'B'))
console.log(avaliaSalario(10000, 'C'))
console.log(avaliaSalario(1500, 'D'))