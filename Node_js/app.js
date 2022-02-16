const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const minhaPrimeiraString = 'Minha primeira string com node.js';
console.log(minhaPrimeiraString);

let LeituraDeCampo;
readLine.question('Por favor, digite alguma coisa:', input => {
  LeituraDeCampo = input;
  console.log(`o usuário digitou: ${LeituraDeCampo}`);
});
