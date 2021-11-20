
function rotateAndFall(box) {
 
  for (let i = 0; i < box.length; i++) {
    let emptyCell = box[i].length - 1; 
    let n = box[i].length - 2; 
    
    for (let j = n; j > - 1; j--) {
      if (box[i][j] === '#') {
        box[i][j] = '.';
        box[i][emptyCell] = '#';
        emptyCell--;  
      } else if (box[i][j] === '*') {
        emptyCell = j - 1;
      }
    }
  }

  let rotatedBox = [];

  for (let i = 0; i < box[0].length; i++) {
    let tempNewRow = [];
   
    for (let j = box.length - 1; j > -1; j--) {
        tempNewRow.push(box[j][i]);
      }
      rotatedBox.push(tempNewRow);
  }
  
  return rotatedBox;
}


console.log(rotateAndFall([['#', '#', '.', '.', '.', '#', '.'],
['#', '#', '#', '.', '.', '*', '.'],
['#', '#', '#', '*', '.', '#', '.']]))
console.log(rotateAndFall([['#', '#', '.', '.', '.', '.', '.'],
['#', '#', '#', '.', '.', '.', '.'],
['#', '#', '#', '.', '.', '#', '.']]))