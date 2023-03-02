function valorIndicado(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorNota = calcularValorNota(valor)
    while(valorIndicado >= valor){
        switch(valor){
            case 100:
                valorIndicado -= 100
                nota100++
                break
            case 50:
                valorIndicado -= 50
                nota50++
                break
            case 10:
                valorIndicado -= 10
                nota10++
                break
            case 5:
                valorIndicado -=5
                nota5++
                break
            case 1:
                valorIndicado -=1
                nota1++
                break
        }
        valorNota = calcularValorNota(valor)
    }
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)

}
console.log(valorIndicado(100))
