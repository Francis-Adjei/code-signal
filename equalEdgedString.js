
function equalEdgedString(words) {
    let arr = [];
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i][0] === words[i + 1][0] && words[i].slice(-1) === words[i + 1].slice(-1)) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    return arr
}

 console.log(equalEdgedString(["abcd", "abdd", "da", "dd"]))
 console.log(equalEdgedString(["a", "a"]))