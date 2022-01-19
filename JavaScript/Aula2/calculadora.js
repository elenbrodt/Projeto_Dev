function calculadora () {
  const operacao = Number(prompt('Escolha uma operação:\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão real\n 5-Divisão inteira\n 6-Potenciação'))

  let numero1 = Number(prompt('Digite o primeiro número da operação:'))
  let numero2 = Number(prompt('Digite o segundo número da operação: '))
  let resultado

  if (operacao<0 || operacao>6){
    alert('Escolha uma das opções válidas de operação')
    calculadora ();
  } 
  if (!numero1) {
    alert('Digite um número!')
    calculadora ();
  }
  if (!numero2){
    alert('Digite um número!')
    calculadora ();
  } else  {
    switch (operacao){
      case 1:
        soma ();
        break;
      case 2:
        subtracao ();
        break;
      case 3: 
        multiplicacao ();
        break;
      case 4:
        divisaoReal ();
        break;
      case 5:
        divisaoInteira ();
        break;
      case 6:
        potencia ();
        break;
    }
  }
 
  function soma (){
     resultado = numero1 + numero2;
     alert (`${numero1} + ${numero2} = ${resultado}`)
     novaOperacao();
  }
  function subtracao (){
    resultado = numero1 - numero2;
    alert (`${numero1} - ${numero2} = ${resultado}`)
    novaOperacao();
 }
  function multiplicacao (){
    resultado = numero1 * numero2;
    alert (`${numero1} x ${numero2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoReal (){
    resultado = numero1 / numero2;
    alert (`${numero1} / ${numero2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoInteira (){
    resultado = numero1 % numero2;
    alert (`O resto da divisao de ${numero1} % ${numero2} é ${resultado}`)
    novaOperacao();
  }
  function potencia (){
    resultado = numero1 ** numero2;
    alert (`${numero1} ^ ${numero2} = ${resultado}`)
    novaOperacao();
  }

  function novaOperacao(){
    const operacao = Number(prompt('Deseja realizar uma nova operação?\n 1-Sim\n 2-Não'));

    if (operacao<1 || operacao>2){
      alert ("Digite uma opção válida.")
      novaOperacao ();
    } 
    else {
      switch (operacao)
      {
        case 1:
          calculadora ();
          break;
        case 2:
          alert('Ok! Obrigado e até mais!');
          break;
      }
    }
  }
}

calculadora ();