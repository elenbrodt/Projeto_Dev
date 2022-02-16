
const lines = '2 4 3 8';
let line = lines.split(' ');

for (i of line){
  if (2 <= i && i <= 6){
    console.log(Number(line.reduce(
      (anterior, atual) => Number(anterior) + Number(atual) -1
    )))
  }else
  console.log("Número inválido")
}

