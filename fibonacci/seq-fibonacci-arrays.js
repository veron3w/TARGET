/* 
escreva um programa na linguagem que desejar onde, 
informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacci (){
  //Sequência de Fibonacci (30 numeros)
  let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 
    75025, 121393, 196418, 317811, 514229]


  // usuario insere um numero
  let numUsuario = parseInt(prompt("Digite um número para descobrir se ele está na sequência de Fibonacci (Lembre-se que se inicia em 0 e 1)."))
  
  // verificação do numero
  if (fibonacci.includes(numUsuario)){
    alert("O número " + numUsuario + " está na sequência de Fibonacci.")
  } else {
    alert("O número " + numUsuario + " não está na sequência de Fibonacci.")
  } 
  
}

fibonacci()