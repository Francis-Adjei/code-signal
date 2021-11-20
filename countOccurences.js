function countOccurences(n){
    n_string = [];
    generated_n = []
    zero_count = 0
    two_count = 0
    four_count = 0
    for (let i = 0; i< n+1; i++){
        generated_n.push(i)
        n_string.push(generated_n[i].toString())
 
        if(n_string[i].includes('0')){
            zero_count += (n_string[i].match(/0/g) || []).length;
        }
        if(n_string[i].includes('2')){
            two_count += (n_string[i].match(/2/g) || []).length;
        }
        if(n_string[i].includes('4')){
            four_count += (n_string[i].match(/4/g) || []).length;
        }
    }

    return (zero_count+two_count+four_count)
}

console.log(countOccurences(22))