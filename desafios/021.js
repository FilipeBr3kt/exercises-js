// indentificar o valor do plano em relação a idade

function verificaPlanoDeSaude(idade) {
    if(idade < 10) {
        return 180
    } else if(idade >= 10 && idade <= 30) {
        return 150
    } else if(idade > 30 && idade <=60) {
        return 195
    } else{
        return 230
    }
}

console.log(verificaPlanoDeSaude(9))
console.log(verificaPlanoDeSaude(20))
console.log(verificaPlanoDeSaude(40))
console.log(verificaPlanoDeSaude(70))