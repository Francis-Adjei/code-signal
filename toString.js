function toString (number) {
    let arr = [];
    number = number.toString()

    for(let i = 0; i<number.length; i++){
        arr.push(parseInt(number[i]))
    }

    for (let j=0; j<arr.length; j++){
        if(j%2 !== 0){
            arr[j] *= -1
        }
    }

    return arr;

}

console.log(toString(52134))