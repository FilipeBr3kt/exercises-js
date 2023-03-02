function Formatar(valor) {
    console.log('Valor normal:', valor)
    valor = `Valor em reais: R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valor)
}

Formatar(0.1 + 0.2)