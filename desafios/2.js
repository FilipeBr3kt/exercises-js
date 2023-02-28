function tiposDeTriangulos(num1, num2, num3) {
        if(num1 == num2 && num2 == num3) {
            console.log('é um triângulo equilátero')
        } else if(num1 == num2 || num2 == num3 || num1 == num3) {
            console.log('é um triângulo isóceles')
        } else {
            console.log('é um triângulo escaleno')
        }
}

tiposDeTriangulos(2, 2, 2)
tiposDeTriangulos(1, 2, 2)
tiposDeTriangulos(1, 2, 3)
tiposDeTriangulos(1, 1, 2)

const typeTriangle = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
      if (a == b && b == c) {
        console.log('Triângulo equilátero');
      } else if (a == b || a == c || c == b) {
        console.log('Triângulo isóceles');
      } else {
        console.log('Triângulo escaleno');
      }
    } else {
      console.log('Nenhuma medida foi informada!');
    }
  }
  
  typeTriangle(10, 5, 10);
  typeTriangle(10, 10, 10);
  typeTriangle(3, 4, 5);
  typeTriangle();