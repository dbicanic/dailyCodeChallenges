function whatIsInAName(collection, source) {
    // What's in a name?
    const arr = [];
    const sourceKeys = Object.keys(source);
    // Only change code below this line
    for(let i = 0; i < collection.length; i++){
        let valid = true;
        for(let j=0; j < sourceKeys.length; j++){
            if((sourceKeys[j] in collection[i])){
                console.log(source[sourceKeys[j]]);
                console.log(collection[i][sourceKeys[j]]);
                if(source[sourceKeys[j]] != collection[i][sourceKeys[j]]){
                    valid = false;
                }
            }else{
                valid = false;
            }
            if(valid == false) break;
        }
        if(valid==true) arr.push(collection[i]);
    }

    // Only change code above this line
    return arr;
}
  
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));