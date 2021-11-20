function deleteMinimalPeaks(numbers) {
  function getMin(a, b) {
    return Math.min(a, b);
  }
  let result = [];
  let temp = [];
  let ab = [...numbers];
  let min;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < ab.length; j++) {
      if (j === 0) {
        if (ab[j] > ab[j + 1]) {
          temp.push(ab[j]);
        }
      } else if (j === ab.length - 1) {
        if (ab[j] > ab[j - 1]) {
          temp.push(ab[j]);
        }
      } else {
        if (ab[j] > ab[j - 1] && ab[j] > ab[j + 1]) {
          temp.push(ab[j]);
        }
      }
    }
    if (ab.length === 1) {
      result.push(ab[0]);
    }

    if (temp.length > 0) {
      min = temp.reduce(getMin);
      result.push(min);
      temp = [];
      ab.splice(ab.indexOf(min), 1);
    }
  }

  return result;
}
console.log(deleteMinimalPeaks([2, 7, 8, 5, 1, 6, 3, 9, 4]));
// console.log(deleteMinimalPeaks([2, 7, 8, 5, 1, 6, 3, 9, 4]));

