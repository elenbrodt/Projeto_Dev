/*const calc = function (operacao, num1, num2){
  return operacao(num1, num2);
}

const soma = function (num1, num2){
  return num1+num2;
}

const sub = function (num1, num2){
  return num1-num2;
}

const somaResultado = calc (soma, 3, 8);
const subResultado = calc (sub, 7, 3);

console.log(somaResultado); */


/*Spread*/
/* function sum (x, y, z){
  return x+y+z;
}

function mux (x, y, z){
  return x*y*z;
}

const numbers = [2, 2, 3];

console.log (sum(...numbers));
console.log(mux(...numbers));
*/

/*Rest*/

/*function confereTamanho(...tam){
  console.log(tam.length);
}

confereTamanho(1, 2, 3, 4, 7);*/

/* Destructurinig */

const user = {
  id: 42, 
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId ({id}) {
  return id;
}

function fullName ({fullName: { firstName: first, lastName: last}}){
  return `${first} ${last}`;
}

function forInUser(obj){
  for (prop in obj){
    console.log(obj[prop]);
  }
}

function forOfUser(array){
  for (letra of array){
    console.log(letra);
  }
}
const palavra = "palavra";
console.log(forOfUser(palavra));

