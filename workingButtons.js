function workingButtons(digits, words){
    result=[];
    workingSet=[];

    const phone = {
        0: [], 
        1: [],
        2: ['a','b','c'], 
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    s=Array.from(words);
   
    Object.keys(phone).forEach(function(key) {
        if(digits.includes(+key)){           
           workingSet.push(...phone[key])
           
        }
    });
        s.forEach((e,j)=>{
           
        let g = Array.from(e);
         
       for(let i=0; i<g.length; i++){
       
           if(!workingSet.includes(g[i])){
            console.log(g[i])
               result.push(false);
             break;
           }
            else if(i===e.length-1){
               result.push(true)
           }              
       }    
    })
    return result;   
    }
      console.log(workingButtons([2,3],['abc','gdef']))
    console.log(workingButtons([0,1,2,3,4,5,6,7,8,9],['abc','gdef', 'x']))
   