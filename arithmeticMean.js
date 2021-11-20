function arithmeticMeans(a){
    let v = []
    for(let i=0; i<a.length; i++){

        if ((i-1) < 0 && (i+1) == a.length){
            a[i-1] = 0
            a.push(0) 
            temp = a[i-1] + a[i] + a[-1]
            v.push(temp)
            break
            
        }

        if((i-1) < 0){
            a[i-1] = 0

            temp = a[i-1] + a[i+1]
            v.push(temp)
        }
        else if(i+1 === a.length){
            a.push(0)
            temp = a[i-1] + a[-1]
            v.push(temp)
            break;
        }
        else{
            temp = a[i-1] + a[i+1]
            v.push(temp)
        } 
        // console.log(v)
    }

    console.log(v)
    count = 0
    for (let i=0; i<v.length; i++){
        if (v[i] === a[i]*2){
            count += 1
        }

    }
    return count
    
}

console.log(arithmeticMeans([2,4,6,6,3,6,3]))