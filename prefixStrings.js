function prefixStrings(a, b) {
    fullComp = []
    currentString = ''
    
    for (let i = 0; i < a.length; i++) {
        currentString = currentString + a[i]
        fullComp.push(currentString)
    }
    
    for (let j = 0; j < b.length; j++) {
        if (!(fullComp.includes(b[j]))) {
            return false
        }
    }
    
    return true
}


console.log(prefixStrings(['one', 'two','three'], ['onetwo','one']))
console.log(prefixStrings(['One', 'TwoThree','Four'], ['One', 'OneTwo']))