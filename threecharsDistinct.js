function threeCharsDistinct(s){
    arr= Array.from(s);
    let count = 0;
    for(let i =0;i <arr.length-2;i++){
        
        let a = arr[i]
        let b = arr[i+1]
        let c = arr[i+2]
        // console.log(a,b,c)
     let k= ( a !== b) && (b !== c) &&(a !== c)

        if (k){
            count ++;
        }
    }

    return count;

}
console.log(threeCharsDistinct('1235557'))