/* 
escreva um programa na linguagem que desejar onde, 
informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

// declaração de função
function fibonacci(numA, numB) {
	numA = 0;
	numB = 1;
	let numeroUsuario = parseInt(prompt("Partindo do primeiro número 0 e o segundo 1, digite um número para descobrir se ele está na sequencia de Fibonacci."));

	// geração da sequencia
	for (let contador = 0; contador <= 50; contador++) {
		let prox = numA + numB;
		numA = numB;
		numB = prox;

		// verificação se o numero pertence a  sequencia
		if (numB === numeroUsuario) {
			alert("O número " + numeroUsuario + " pertence à sequência de Fibonacci.");
			return;
		}
	}
	if (numB !== numeroUsuario) {
		alert("O número " + numeroUsuario + " NÃO pertence à sequência de Fibonacci.");
	}
}

fibonacci();
