const tripleSum = (a) =>{
    b=[]
    for (let i=0; i<a.length-2; i++){
        let u = Math.pow(a[i],2) + Math.pow(a[i+1],2) === Math.pow(a[i+2],2)
        let v = Math.pow(a[i],2) + Math.pow(a[i+2],2) === Math.pow(a[i+1],2)
        let z = Math.pow(a[i+1],2) + Math.pow(a[i+2],2)=== Math.pow(a[i],2)

        if(u || v || z){
            b.push(1)
            
        } else{
            b.push(0)
        }
    }

    return b
    
}

console.log(tripleSum([0,5,5,0,5,13,12]))
console.log(tripleSum([0,5,5,0,5,13,12,34,5,6]))