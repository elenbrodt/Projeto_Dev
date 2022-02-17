function acharMinimoDeDias (duracoes) {

var dias = 0 ;

  for (let i = 0; i < duracoes.length; i++){  

    if (duracoes[i] == duracoes[i].toFixed(2)){
      console.log(duracoes[i])
      console.log("entrou no if do fixed")
      
      if (duracoes[i] <= 2){
        console.log("entrou no if de menor de 2")
          soma = duracoes[i] + duracoes[i+1];
          if (soma <= 3.00){
            console.log("entrou no if de soma menor que 3")
            dias = dias + 1;
            duracoes.shift(duracoes[i]);
            duracoes.shift(duracoes[i+1]);
            console.log(`Diyyyyya ${dias}: ${soma} horas`, duracoes)
            i --;
          }else{
            console.log("não entrou no if de soma menor que 3. soma maior que 3")
              if (!duracoes[i+2]){
                console.log("entrou no if de não existe i+2")
                dias = dias + 1; 
                soma = duracoes[i];
                duracoes.shift(duracoes[i]);
                console.log(`ddddia ${dias}: ${soma} horas`, duracoes);
                i--;
              }else{
                console.log("else de existe i+2")
                soma = duracoes[i] + duracoes[i+2];
                dias = dias + 1; 
                duracoes.shift(duracoes[i]);
                duracoes.splice(duracoes[i+2]);
                console.log(`Dhhhia ${dias}: ${soma} horas`, duracoes);
                i--;
              }   
          }
      } else{
        console.log("entrou no if maior que 2")
        soma = duracoes[i];
        dias = dias + 1;
        console.log(`Dia ${dias}: ${soma} horas`, i)
        duracoes.shift(duracoes[i]);
        i--;
        }
    } else {
      console.log(duracoes[i])
      console.log("não entrou no if do fixed. mais que duas casas decimais")
      soma = duracoes[i]
        dias = dias + 1;
        duracoes.shift(duracoes[i]);
        console.log(`Dia ${dias}: ${soma} horas`, i)
        i--;
    }

  }
  return console.log(`Total de dias: ${dias}`);
}

duracoes = [1.90, 1.04, 1.25, 2.5, 1.75];
duracoes2 = [1.01, 1.01, 1.01, 1.4, 2.4];
duracoes3 = [1.01, 1.9991, 1.01, 1.4, 2.4];

acharMinimoDeDias (duracoes);