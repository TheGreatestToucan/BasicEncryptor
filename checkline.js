function lineContains(mainString, subString, lineNumber){
    return mainString.indexOf(subString, lineNumber) === lineNumber;
}

function findType(string){
    if (string.indexOf("c:1") !== -1){
        return 1;
    } else if (string.indexOf("c:2") !== -1){
        return 2;
    } else if (string.indexOf("c:3") !== -1){
        return 3;
    }
}
