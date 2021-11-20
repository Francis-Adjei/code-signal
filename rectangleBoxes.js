function rectangleBoxes(operations) {          
    const output = [];
    const rectangles = [];
    for (let i = 0; i < operations.length; ++i) {
     
        if (operations[i][0]) {
            const box = [operations[i][1], operations[i][2]];
            
            const fit = [];
            let noFit = false;
            for (let k = 0; k < rectangles.length; ++k) {
                const r = rectangles[k];
                
                if (r[0] <= box[0] && r[1] <= box[1] || r[1] <= box[0] && r[0] <= box[1]) {
                   
                    continue;
                }
                else {
                    noFit = true;
                    break;
                }
            }
          
            if(noFit){
                output.push(false)
            }else{
                output.push(true)
            }
        }
      
        else rectangles.push([operations[i][1], operations[i][2]]);
    }
    return output;
}

console.log(rectangleBoxes([[1, 1, 1]]))
console.log(rectangleBoxes( [[0, 1, 3], [0, 4, 2], [1, 3, 4], [1, 3, 2]]))