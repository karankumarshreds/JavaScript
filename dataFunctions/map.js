//map//
array = [1,2,3,4,5];
rsult = array.map(function(x){
  return {
    value  : x,
    isEven : x % 2 === 0 
  }
});
console.log(rsult);
