function verificaPalindromo (string){

  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var finalString = reverseArray.join("");

  /*(finalString == string) ? "É": "Não é";*/

  if (finalString == string){
    return "É";
  }else {
    return "não é";
  }
}

function verificaPalindromo2 (string){
  if (!string) return "string inexistente";
  for (let i = 0; i<string.length/2; i++){
    if(string[i] !== string[string.length -1 - i]){
      return "Não é";
    }
  }
  return "é"
}

console.log(verificaPalindromo2 ("arara"));