function acharMinimoDeDias(duracoes) {
  let soma = 0;
  let dias = 0;
  
    for (let i=0; i< duracoes.length; i++){
      
        soma = duracoes[i] + duracoes[i+1]; //realiza a soma de dois índices consecutivos
        
        if (soma < 3.00 ){
          dias = dias + 1;
          console.log(`Dia ${dias}: ${soma} horas`);
          i++;
        } // testa soma menor que 3.00
        else if (soma > 3.00){ // caso a soma inicial seja maior que 3, realiza a soma do primeiro índice com o correspondente i+2 
          soma = duracoes[i] + duracoes[i+2];
          dias = dias + 1;
          
          if (!duracoes[i+2]){
            soma = duracoes[i]; // caso não exista o correspondente i+2, ajusta o valor de soma para o próprio índice
          }
          
          console.log(`Dia ${dias}: ${soma} horas`);
          
        } 
 
      }
    
  return console.log(`Alex levará ${dias} dias para ver todos os filmes.`);
}
  
duracoes = [1.90, 1.04, 1.25, 2.5, 1.75];

acharMinimoDeDias (duracoes);