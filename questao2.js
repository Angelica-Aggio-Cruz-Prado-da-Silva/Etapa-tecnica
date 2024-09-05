// Questão 2 //

let number = 0;

function isFibonacci(number) {
    if (number === 0 || number === 1) return true;

    let a = 0, b = 1;
    while (b < n) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b === n;
}

function checkFibonacci() {
    let userInput = parseInt(prompt("Digite um número para verificar se é Fibonacci:"));
    
    if (isNaN(userInput)) {
        console.log("Por favor, insira um número válido.");
    } else if (isFibonacci(userInput)) {
        console.log(userInput + " é um número Fibonacci.");
    } else {
        console.log(userInput + " não é um número Fibonacci.");
    }
}

checkFibonacci();