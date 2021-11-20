function removeCellsFall(board){
    const h = board.length
    const w = board[0].length
    let maxRow = 0
    let count = 0
    const checkBelow = (row, col) => {
      let block = 0
      for (let i = row; i < row + toMove; i++) {
        if (board[i][col] === '#') {
          block++
        }
      }
      return block
    }
  
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (board[i][j] === '*') {
          maxRow = Math.max(maxRow, i)
        }
      }
    }
    const toMove = h - maxRow;
    if (toMove === 0) {
      return count
    }
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (board[i][j] === '*') {
          const numBlocked = checkBelow(i, j)
            count += numBlocked
        }
      }
    }
    return count
  }
  console.log(removeCellsFall([['*','*','*'],['#', '*', '*'], ['*','*','.'],['.','.','.'],['.', '#','#']]))