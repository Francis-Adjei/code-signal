
function fileUploadingProgress(chunks){
    let progressArray=[0];  
    for(let i = 0; i<chunks.length; i++){  
        if(typeof chunks[i] === 'object'){ 
            // console.log(chunks[i]);        
            if(chunks[i][0] >= progressArray[progressArray.length-1]){
                progressArray.push(chunks[i][0])  
               
            } 
            if(chunks[i][1]>chunks[i][0]){
                console.log(chunks[i][1]);
                progressArray.push(chunks[i][0])              
            }
        }
    }progressArray.shift();
 return progressArray

}
console.log(fileUploadingProgress([[1,1],[2,3],[3,3]]))