function acharMinimoDeDias (duracoes) {

var dias = 0 ;

  for (let i = 0; i < duracoes.length; i++){  

    var duasCasasDecimais = (a) => a == a.toFixed(2);

    if (duracoes[i] == duracoes[i].toFixed(2)){
      if (duracoes[i] <= 2.00){
          soma = duracoes[i] + duracoes[i+1];
          if (soma <= 3.00){
            dias = dias + 1;
            duracoes.shift(duracoes[i]);
            duracoes.shift(duracoes[i+1]);
            console.log(`Diyyyyya ${dias}: ${soma} horas`, i)
            i --;
          }else{
              soma = duracoes[i] + duracoes[i+2];
              dias = dias + 1;
              console.log(`Dhhhia ${dias}: ${soma} horas`, i);
              duracoes.shift(duracoes[i]);
              duracoes.shift(duracoes[i+2]);
              i--;
          }
      } 
      if (duracoes[i] > 2.00){
        soma = duracoes[i]
        dias = dias + 1;
        duracoes.shift(duracoes[i]);
        console.log(`Dia ${dias}: ${soma} horas`, i)
        }
    } else {
      soma = duracoes[i]
        dias = dias + 1;
        duracoes.shift(duracoes[i]);
        console.log(`Dia ${dias}: ${soma} horas`, i)
    }

  }
  return console.log(`Total de dias: ${dias}`);
}

duracoes = [1.90, 1.04, 1.25, 2.5, 1.75];
duracoes2 = [1.01, 1.01, 1.01, 1.4, 2.4];
duracoes3 = [1.01, 1.999999, 1.01, 1.4, 2.4];

acharMinimoDeDias (duracoes3);