function mutateTheArray(n, a) {
    b = []
    for(let i=0; i<a.length; i++){
        // console.log(a)
        let v = a[i-1] + a[i] + a[i+1]
        
        if ((i-1) < 0 && (i+1) == a.length){
            a[i-1] = 0
            a.push(0)
            temp = a[i-1] + a[i] + a[-1]
            b.push(temp)
            break
            
        }
        
        if((i-1) < 0){
            a[i-1] = 0
            temp = a[i-1] + a[i] + a[i+1]
            b.push(temp)
        }
        else if(i+1 === a.length){
            a.push(0)
            temp = a[i-1] + a[i] + a[-1]
            b.push(temp)
            break
        }
        else{
            temp = a[i-1] + a[i] + a[i+1]
            b.push(temp)
        } 
    }
    return b

}

console.log(mutateTheArray(5, [4, 0, 1, -2, 3]))
