function soma (arr){
  return arr.reduce((anterior, atual)=> anterior + atual)
}
const num = [1, 2, 3, 4];

console.log (soma(num));