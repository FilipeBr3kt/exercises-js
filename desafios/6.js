//JS : J * C * I
function jurosSimples(capital, juros, tempo) {
    J = capital * juros * tempo
    console.log('O juros simples de um capital de:', capital, '/ juros de:', juros, '/ tempo de:', tempo, '/ é de:', J, '\nO juros simples é:', J)
}

jurosSimples(2, 3, 5)

//JC: M = C (1+i) T
function jurosComposto(capital, juros, tempo) {
    M = capital * (1 + juros) * tempo
    console.log(`O juros composto de um capital de ${capital}, de um juros de ${juros}, de um tempo de ${tempo}\nO juros composto será de: ${M}`)
}

jurosComposto(2, 3, 5)

