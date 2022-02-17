const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e se tem habilitação para entrar no Kart \n Além da sua idade, precisamos verificar qual o seu horário na lista.')

let ano;
let habilitacao;
let idade_anos;
let nome;

readLine.question('Qual o seu nome?  ', nome_input => {
  nome = nome_input.toLowerCase();
  anoNascimento();
});

function anoNascimento (){
    readLine.question('Qual o ano do seu nascimento?  ', ano_input => {
    ano = ano_input;
    idade(ano);
    maior_idade(idade_anos);
  });
}

function maior_idade (idade_anos){
  if (idade_anos >= 18){
    console.log(`Você tem ${idade_anos} anos e é maior de idade.`);
    readLine.question('Você trouxe sua habilitação?  ', habilitacao_input => {
      habilitacao = habilitacao_input.toUpperCase();   
      tem_habilitacao(habilitacao);
    });
  }else {
    console.log(`Você não pode andar de kart pois tem ${idade_anos} anos e é menor de idade.`);
  }
}

function idade (ano){
  idade_anos = (2022 - ano);
  return idade_anos;
}

function tem_habilitacao (habilitacao){
  if (habilitacao == "SIM"){
    tem_horario (nome);
  }else {
    return console.log('Você não poderá andar de Kart sem a sua habilitação.')
  }
}

function tem_horario (nomes){

  switch(nomes){
    case "Marcos":
      console.log(`Olá ${nome}, seu horário é às 10:00!`);
      break;
    case "Andreia":
      console.log("Seu horário é as 13:00");
      break;
    case "luciano":
      console.log("Seu horário é as 16:00");
      break;
    case "katchusa":
      console.log("Seu horário é as 19:00");
      break;
    default:
      console.log("Você não tem horário agendado")
  }
}