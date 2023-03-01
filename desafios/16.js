function calculadora(num1, operacao, num2) {
    switch(operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default: 
            return 'Operação inválida'
    }
}

console.log(calculadora(3, '*', 2))
console.log(calculadora(3, '+', 2))
console.log(calculadora(3, '-', 2))
console.log(calculadora(6, '/', 2))
console.log(calculadora(3, '0', 2))
