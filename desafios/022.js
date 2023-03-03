//  calcular o valor a ser pago de anuidade de uma associação

function valorAnual(mes, valor) {
    if(mes > 0  && mes <= 12){
        atraso = mes - 1
        return(valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'mes invalido'
    }
}

console.log(valorAnual(12, 100))