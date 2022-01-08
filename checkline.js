function lineContains(mainString, subString, lineNumber){
    if (mainString.indexOf(subString, lineNumber) === lineNumber){
        return true;
    } else {
        return false;
    }
}