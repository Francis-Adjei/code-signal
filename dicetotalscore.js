
function diceTotalScore(a,b,c){

    if(a===b&&b==c){
        return a*1000;
    }else if(a===b || a===c ||b===c){
        if(a===b){return 500*a}
        if(a===c){return 500*a}
        if(b===c){return 500*b}
    }else if(a!==b && a !==c && b!==c){
        return Math.min(a,b,c)*100
    }
}
console.log(diceTotalScore(3,2,5))