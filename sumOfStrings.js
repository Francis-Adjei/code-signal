function sumOfStrings(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
  
    let sum = [];
  
    let loop = a.length > b.length ? a.length : b.length;
  
    for (let i = 0; i < loop; i++) {
      if (a[i] !== undefined && b[i] !== undefined) {
        sum.unshift(parseInt(a[i]) + parseInt(b[i]));
      } else if (a[i] === undefined) {
        sum.unshift(parseInt(b[i]));
      } else if (b[i] === undefined) {
        sum.unshift(parseInt(a[i]));
      }
    }
  
    return sum.join('');
  }
  
 
 console.log( sumOfStrings('99', '99'));
 console.log( sumOfStrings('11', '9'));
  