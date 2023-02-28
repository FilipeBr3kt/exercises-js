function valores(x, y, operacao) {
    if (operacao == '+') {
        return x + y
    } else if (operacao == '-') {
        return x - y
    } else if (operacao == '*') {
        return x * y
    } else if (operacao == '/') {
        return x / y
    }    
}

console.log(valores(10, 5, '+'))
console.log(valores(10, 5, '-'))
console.log(valores(10, 5, '*'))
console.log(valores(10, 5, '/'))

function calculo(num1, num2) {
    console.log(` Soma = ${num1 + num2} \n Subtração = ${num1 - num2} \n Multiplicação = ${num1 * num2} \n Divisão = ${num1 / num2}`)
}
calculo(10, 5)