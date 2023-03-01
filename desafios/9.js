// nota 0 a 100
// abaixo de 40 reprovado
// abaixo de 38 não arredonda
// ex: 84 arredonda pra 85 e 86 pra 90
// Math.ceil(x / 5) * 5;

function resultado(nota) {
    let notaArredondada = arredondar(nota)
    if(notaArredondada < 40) {
        console.log(`Reprovado com nota: ${notaArredondada}`)
    } else {
        console.log(`Aprovado com nota: ${notaArredondada}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2){
        return nota +(5 -(nota % 5))
    } else{
        return nota
    }
}


resultado(83)
resultado(40)
resultado(38)
resultado(30)



    
