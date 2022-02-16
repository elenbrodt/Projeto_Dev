const frase = 'Life is not a problem to be solved';

const array = [];

array.push(...frase);

const num = 34;

function caracteres (num){
  var resposta = "";
  for (i=0; i<=num-1; i++){
    resposta = resposta + array[i];
  }
  return resposta;
}

console.log(caracteres(num));