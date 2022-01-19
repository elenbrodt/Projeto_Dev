/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20"*/

function criaPrimeiraFrase(num1, num2){
  let resposta;
  let primeiraFrase;

  (num1 == num2) ? resposta = '' : resposta = 'não';
  primeiraFrase = `Os números ${num1} e ${num2} ${resposta} são iguais.`;

  return primeiraFrase;
}

function criaSegundaFrase (num1, num2){
  let soma = num1+num2;
  let resposta10;
  let resposta20;
  let segundaFrase;

  (soma<10) ? resposta10 = 'menor' : resposta10 ='maior';
  (soma>20) ? resposta20 = 'maior' : resposta20 = 'menor';

  segundaFrase = `Sua soma é ${soma}, que é ${resposta10} que 10 e ${resposta20} que 20.`
  return segundaFrase;
}

function comparaNumeros(num1, num2){
  const primeiraFrase = criaPrimeiraFrase (num1, num2);
  const segundaFrase = criaSegundaFrase (num1, num2);

  return `${primeiraFrase} ${segundaFrase}`
}

console.log(comparaNumeros (6,7));