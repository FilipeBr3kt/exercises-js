//código / Descrição do Produto / Preço
//100 / Cachorro Quente / R$ 3,00
//200 / Hambúrguer Simples / R$ 4,00
//300 / Cheeseburguer / R$ 5,50
//400 / Bauru / R$ 7,50
//500 / Refrigerante / R$ 3,50
//600 / Suco / R$ 2,80

function lanchonete(codigo, quantidade) {
    switch(codigo) {
        case 100:
            console.log('O Cachorro quente ficou:', 3 * quantidade,'Reais')
            break
        case 200:
            console.log('O Hamburguer ficou:', 4 * quantidade,'Reais')
            break
        case 300:
            console.log('O Cheeseburguer ficou:', 5.5 * quantidade,'Reais')
            break
        case 400:
            console.log('O Bauro ficou:', 7.5 * quantidade,'Reais')
            break
        case 500:
            console.log('O Refrigerante ficou:', 3.5 * quantidade,'Reais')
            break
        case 600:
            console.log('O Suco ficou:', 2.8 * quantidade,'Reais')
            break
        default:
            console.log('Este produto não está no cardápio')
    }
}

lanchonete(100, 20)
lanchonete(200, 20)
lanchonete(300, 20)
lanchonete(400, 20)
lanchonete(500, 20)
lanchonete(600, 20)



