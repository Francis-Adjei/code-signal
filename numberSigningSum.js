function numberSigningSum(n){

    return  eval(n.toString().split('').map((e,i)=> i%2===0?'+'+e:'-'+e).join(''))
}
console.log(numberSigningSum(12213 ))