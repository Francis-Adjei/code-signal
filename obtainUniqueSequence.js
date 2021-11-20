function obtainUniqueSequence(numbers){
    let count = 0;
    let newNumbers = [...numbers];
    if((new Set(newNumbers)).size === newNumbers.length){
        return 0;
    }
    else{
        while((new Set(newNumbers)).size !== newNumbers.length){
            for(let i = 0; i < numbers.length; i++){
                if(newNumbers.slice(0, i).includes(newNumbers[i]) || newNumbers.slice(i+1).includes(newNumbers[i])){
                    newNumbers[i] = newNumbers[i]+1;
                    count++;
                }
            }       
        }
        return count;
    }
   
    }

    console.log(obtainUniqueSequence([5,1,2,4,5,2]));
    console.log(obtainUniqueSequence([5,1,3,4,4,2]));
    console.log(obtainUniqueSequence([2,2,2,2,2,2,2]));
    console.log(obtainUniqueSequence([1,2,3,4,5,6,7]));