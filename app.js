
// Definir una función
var removerDuplicados= function(array){
  var newArray= [];
for(var i=0; i<array.length; i++){
  if (newArray.indexOf(array[i])=== -1){
newArray.push(array[i]);
  }

  }
return newArray;
}
console.log(removerDuplicados([4,1,7,1,2,7,9]);
