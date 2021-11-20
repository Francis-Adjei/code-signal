
function bestSquares(m, k){
   
  
    let kadaneMat = []
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length - k + 1; j++) {
        let prevArr = m[i].slice(j, j + k)
        let prevSum = prevArr.reduce((acc, cur) => acc + cur, 0)
        
        kadaneMat.push({
          arr: prevArr,
          sum: prevSum,
          i: i,
          j: j,
        })
        
      }
    }
  
    let maxSum = {
      sum: 0,
      arr: [],
    }
    
    for (let l = 0; l < m.length; l++) {
      let colArr = kadaneMat.filter((x) => x.j == l)
      
      for (let n = 0; n <= k; n++) {
        let sliceColArr = colArr.slice(n, n + k)
       
        let curSum = 0
        sliceColArr.forEach((ele) => (curSum += ele.sum))
       
        if (curSum > maxSum.sum) {
          let newArr = []
          sliceColArr.forEach((ele) => {
            ele.arr.forEach((thing) => {
              if (!newArr.includes(thing)) {
                newArr.push(thing)
              }
            })
          })
          maxSum.sum = curSum
          maxSum.arr = newArr
        } else if (curSum === maxSum.sum) {

          sliceColArr.forEach((ele) => {
            ele.arr.forEach((thing) => {
              if (!maxSum.arr.includes(thing)) {
                maxSum.arr.push(thing)
              }
            })
          })
        }
      }
    }
    
    return maxSum.arr.reduce((acc, cur) => acc + cur, 0)
  }
  
//   let m = [
//     [1, 0, 1, 5, 6],
//     [3, 3, 0, 3, 3],
//     [2, 9, 2, 1, 2],
//     [0, 2, 4, 2, 0],
//   ]
//   let k = 2
  
//   console.log(bestSquares(m, k))