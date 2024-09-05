// Questão 5 //

let string = prompt("Digite uma palavra.");


function inverterString(string) {

    let array = [];
    for (let i = 0; i < str.length; i++) {
      array.push(string[i]);
    }
  
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio < fim) {
      let temp = array[inicio];
      array[inicio] = array[fim];
      array[fim] = temp;
  
      inicio++;
      fim--;
    }
  
    let novaString = "";
    for (let i = 0; i < array.length; i++) {
      novaString += array[i];
    }
  
    return novaString;
}

console.log(inverterString(string));