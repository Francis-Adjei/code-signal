function divisorSubstrings(n, k){
    let nString = n+"";
    let subStrings = [];
    let count = 0;
    let tempV;

    for(let i = 0; i+k <= nString.length; i++){
        tempV = (parseInt(nString.substring(i, i+k)))
        if (n % tempV === 0 && !subStrings.includes(tempV)){
           subStrings.push(tempV);
           count++;
       } 
    }
    return count;
}

console.log(divisorSubstrings(555, 1));
console.log(divisorSubstrings(120, 2));
console.log(divisorSubstrings(5341, 2));