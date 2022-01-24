
const maca = {
  value: 2,
}
const laranja = {
  value: 3,
}

function mapComThis (arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log(mapComThis(nums, maca))

function mapSemThis (arr){
  arr.map (function(item){
    return item *5;
  })
}

console.log(mapSemThis(nums))