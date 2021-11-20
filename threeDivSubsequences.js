function threeDivSubsequences(number) {
    let count = 0;
  
    for (let i = 0; i < number.length; i++) {
      for (let j = i; j < number.length; j++) {
        let sub = number.slice(i, j + 1);
        if ((sub[0] !== "0" && parseInt(sub) % 3 === 0) || sub === "0") count += 1;
      }
    }
  
    return count;
  }
  
  console.log(threeDivSubsequences("456"));
  console.log(threeDivSubsequences("6666"));
  console.log(threeDivSubsequences("303"));