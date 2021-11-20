 
 function mergingLetters(s,t){

    resultArray = [];
    let arrayLength= 0;
    let greater;
    if(s.length>t.length){
        arrayLength=t.length
        greater = s;
    }
    else{
        arrayLength=s.length
        greater = t
    }

    for(let i=0; i<arrayLength; i++){
        resultArray.push(s[i]);
        resultArray.push(t[i]);
    }
    for(let i=arrayLength; i<greater.length; i++){
        resultArray.push(greater[i])
    }
    return resultArray.join('');
    

}
console.log(mergingLetters('aaaaa','bbb'))
