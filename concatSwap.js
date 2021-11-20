function concatSwap (s, sizes) {

    let num=0
    let arr=[]
    for (let i=0; i< sizes.length; i++) {
        let tmp=s.slice(num,sizes[i]+num)
        num=sizes[i]+num
        arr.push(tmp)
       
    }
     

    for(let i=0; i<arr.length-1; i+=2) {
        let tmp
        tmp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tmp
    }

    let new1=arr.join('')
    
return new1

}

 