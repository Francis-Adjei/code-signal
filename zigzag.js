function isZigzag(numbers) {
    let b=[];
    for(let i=0; i<numbers.length - 2; i++){
        if((numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]) || (numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2])){
            b.push(1)
        } else{
            b.push(0)
        }
    }
    return b

}