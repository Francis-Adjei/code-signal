function sorted (arr,sum) {
    a = []

    for (let i = 0; i<arr.length; i++){

        for (let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === sum){
                a.push([arr[i], arr[j]])
            }
        }
    }

    return a

}

console.log(sorted([3,4,5,2,-4,11,9,8],7))