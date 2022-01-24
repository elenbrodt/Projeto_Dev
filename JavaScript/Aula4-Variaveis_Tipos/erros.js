function recebeArray (array, numero){
  try {
    if (!array && !numero){
      throw new ReferenceError('Envie os parâmetros!');
    }
    if (typeof(array) != 'object'){
      throw new TypeError('Array não é do tipo objeto.')
    }
    if (typeof(numero) != 'number'){
      throw new TypeError('Envie um número junto com o array.')
    }
    if (array.length != numero){
      throw new RangeError('Tamanho do array diferente do enviado como parâmetro')
    }
    return array;
  }
    catch (e){
      if (e instanceof ReferenceError){
        console.log('ReferenceError!');
        console.log (e.stack)
      }
      if (e instanceof TypeError){
        console.log('TypeError!');
        console.log (e.stack)
      }
      if (e instanceof RangeError){
        console.log('RangeError!');
        console.log (e.stack)
      }
    }
}
console.log(recebeArray([1,2,3],3));