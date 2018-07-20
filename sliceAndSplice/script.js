function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let returnArr = [];
  for( let i = 0; i < arr2.length; i++){
    if( i === n ){
      for( let j = 0; j < arr1.length; j++){
        returnArr.push(arr1[j]);
      }
      returnArr.push(arr2[i]);
    }else{
      returnArr.push(arr2[i]);
    }
  }
  return returnArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));