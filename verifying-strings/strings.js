/* 
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
seja maiúscula ou minúscula, 
além de informar a quantidade de vezes em que ela ocorre. 
*/

let palavra = prompt("Digite aqui uma palavra.") // entrada do usuário

let contador = 0 // contador de quantas vezes a ou A aparecem na palavra

// loop de repetição 
for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] === "a" || palavra[i] === "A") {
    contador++
  }
}

// mostra a palavra e diz quantas vezes a letra A ocorre
alert("A letra 'A' existe e ocorre " + contador + " vezes na palavra " + " ' " + palavra + " ' ")