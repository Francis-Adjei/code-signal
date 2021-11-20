function frameGenerator(n){
    let output = [];
    output.push("*".repeat(n));
    for(let i = 0; i < n - 2; i++){
        output.push("*"+" ".repeat(n-2)+"*");
    }
    output.push("*".repeat(n));
    return output;
}

console.log(frameGenerator(10));