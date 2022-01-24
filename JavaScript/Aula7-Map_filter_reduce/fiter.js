function numerosPares (arr){
  if (!arr || !arr.length){
    return 'Inválido'
  }
  return arr.filter ((item)=>item%2 == 0);
}

const a = [4, 5, 10, 7, 18];
console.log (numerosPares(a));