function substitutiNumerosPares (array){

  console.log(array);

  if (!array.length) return console.log(-1);

  const naoZero = (num) => num!==0;
  const numPar = (num) => num % 2 === 0;

  for (let i =0; i < array.length; i++){
  
    if (naoZero(array[i]) && numPar(array[i])){
      console.log(`trocando ${array[i]} por zero...`);
      array [i] = 0;
    }else if (!naoZero(array[i])){
      console.log('já vale zero!');
    }
  }
  return console.log(array);
}

substitutiNumerosPares ([2, 4, 5, 6, 7, 0, 3]);