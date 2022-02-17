let num = 8;
let init = num % 2 === 0 ? num + 1 : num;

var saida ;

for (let i=0; i<6; i++) {
  if(i==0){
    saida = init;
    console.log(saida+"\n")
  }else{
    impar = saida + 2;
    saida = impar;
    console.log(impar+"\n")
  }
}

