function maxKocurrences(sequence,words){
    let n = words.length;
    let result=[];
    if(n===0||sequence.length===0){
        return result;
    }
    for(let i=0;i<n;i++){
        let word=words[i];
        let count = 0;
        let tmp=word;
        while(true){ 
            let index = sequence.indexOf(tmp);
            if(index==-1){
                break;
            }else{
                count++;
                tmp += word;
            }
        }
        result[i]= count;
    }
    return result;
}
console.log(maxKocurrences('ababcbabc',['ab','babc','bca']))