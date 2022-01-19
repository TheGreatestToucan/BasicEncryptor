function encrypt(string){
    var newString = "";
    var oldString = string;
    oldString = oldString.toLowerCase();
    var rand = Math.random() * 100;
    var code = 0;

    if (rand <= 33) {
        code = 1;
    } else if (rand <= 66) {
        code = 2;
    } else if (rand <= 99){
        code = 3;
    }
    if (code === 1){
        for (var i = -1; i < oldString.length; i++){
            if (lineContains(oldString, "a", i)){
                newString += "1";
            } else if (lineContains(oldString, "b", i)){
                newString += "!";
            } else if (lineContains(oldString, "c", i)){
                newString += "2";
            } else if (lineContains(oldString, "d", i)){
                newString += "@";
            } else if (lineContains(oldString, "e", i)){
                newString += "3";
            } else if (lineContains(oldString, "f", i)){
                newString += "#";
            } else if (lineContains(oldString, "g", i)){
                newString += "4";
            } else if (lineContains(oldString, "h", i)){
                newString += "$";
            } else if (lineContains(oldString, "i", i)){
                newString += "5";
            }  else if (lineContains(oldString, "j", i)){
                newString += "%";
            }  else if (lineContains(oldString, "k", i)){
                newString += "6";
            } else if (lineContains(oldString, "l", i)){
                newString += "^";
            } else if (lineContains(oldString, "m", i)){
                newString += "7";
            } else if (lineContains(oldString, "n", i)){
                newString += "&";
            } else if (lineContains(oldString, "o", i)){
                newString += "8";
            } else if (lineContains(oldString, "p", i)){
                newString += "*";
            } else if (lineContains(oldString, "q", i)){
                newString += "9";
            } else if (lineContains(oldString, "r", i)){
                newString += "(";
            } else if (lineContains(oldString, "s", i)){
                newString += "0";
            } else if (lineContains(oldString, "t", i)){
                newString += ")";
            } else if (lineContains(oldString, "u", i)){
                newString += "<";
            } else if (lineContains(oldString, "v", i)){
                newString += "/";
            } else if (lineContains(oldString, "w", i)){
                newString += "+";
            } else if (lineContains(oldString, "x", i)){
                newString += "|";
            } else if (lineContains(oldString, "y", i)){
                newString += "~";
            } else if (lineContains(oldString, "z", i)){
                newString += "?";
            } else if (lineContains(oldString, " ", i)){
                newString += "_";
            }
        } 
    } else if (code === 2){
        for (var i = -1; i < oldString.length; i++){
            if (lineContains(oldString, "a", i)){
                newString += "<";
            } else if (lineContains(oldString, "b", i)){
                newString += "#";
            } else if (lineContains(oldString, "c", i)){
                newString += "3";
            } else if (lineContains(oldString, "d", i)){
                newString += "8";
            } else if (lineContains(oldString, "e", i)){
                newString += "2";
            } else if (lineContains(oldString, "f", i)){
                newString += "!";
            } else if (lineContains(oldString, "g", i)){
                newString += "+";
            } else if (lineContains(oldString, "h", i)){
                newString += "*";
            } else if (lineContains(oldString, "i", i)){
                newString += "?";
            }  else if (lineContains(oldString, "j", i)){
                newString += ")";
            }  else if (lineContains(oldString, "k", i)){
                newString += "0";
            } else if (lineContains(oldString, "l", i)){
                newString += "/";
            } else if (lineContains(oldString, "m", i)){
                newString += "&";
            } else if (lineContains(oldString, "n", i)){
                newString += "7";
            } else if (lineContains(oldString, "o", i)){
                newString += "@";
            } else if (lineContains(oldString, "p", i)){
                newString += "$";
            } else if (lineContains(oldString, "q", i)){
                newString += "|";
            } else if (lineContains(oldString, "r", i)){
                newString += "~";
            } else if (lineContains(oldString, "s", i)){
                newString += "6";
            } else if (lineContains(oldString, "t", i)){
                newString += "%";
            } else if (lineContains(oldString, "u", i)){
                newString += "1";
            } else if (lineContains(oldString, "v", i)){
                newString += "^";
            } else if (lineContains(oldString, "w", i)){
                newString += "4";
            } else if (lineContains(oldString, "x", i)){
                newString += "9";
            } else if (lineContains(oldString, "y", i)){
                newString += "(";
            } else if (lineContains(oldString, "z", i)){
                newString += "5";
            } else if (lineContains(oldString, " ", i)){
                newString += "_";
            } 
        } 
    } else if (code === 3){
        for (var i = -1; i < oldString.length; i++){
            if (lineContains(oldString, "a", i)){
                newString += "/";
            } else if (lineContains(oldString, "b", i)){
                newString += "_";
            } else if (lineContains(oldString, "c", i)){
                newString += "<";
            } else if (lineContains(oldString, "d", i)){
                newString += "0";
            } else if (lineContains(oldString, "e", i)){
                newString += "6";
            } else if (lineContains(oldString, "f", i)){
                newString += "9";
            } else if (lineContains(oldString, "g", i)){
                newString += "$";
            } else if (lineContains(oldString, "h", i)){
                newString += "4";
            } else if (lineContains(oldString, "i", i)){
                newString += "?";
            }  else if (lineContains(oldString, "j", i)){
                newString += "*";
            }  else if (lineContains(oldString, "k", i)){
                newString += "3";
            } else if (lineContains(oldString, "l", i)){
                newString += ")";
            } else if (lineContains(oldString, "m", i)){
                newString += "8";
            } else if (lineContains(oldString, "n", i)){
                newString += "~";
            } else if (lineContains(oldString, "o", i)){
                newString += "7";
            } else if (lineContains(oldString, "p", i)){
                newString += "%";
            } else if (lineContains(oldString, "q", i)){
                newString += "#";
            } else if (lineContains(oldString, "r", i)){
                newString += "+";
            } else if (lineContains(oldString, "s", i)){
                newString += "@";
            } else if (lineContains(oldString, "t", i)){
                newString += "^";
            } else if (lineContains(oldString, "u", i)){
                newString += "2";
            } else if (lineContains(oldString, "v", i)){
                newString += "1";
            } else if (lineContains(oldString, "w", i)){
                newString += "(";
            } else if (lineContains(oldString, "x", i)){
                newString += "|";
            } else if (lineContains(oldString, "y", i)){
                newString += "&";
            } else if (lineContains(oldString, "z", i)){
                newString += "5";
            } else if (lineContains(oldString, " ", i)){
                newString += "!";
            } 
        } 
    }

    newString = newString.split('');
    newString.splice(0, 1);
    newString = newString.join('');

    if (code === 1){
        newString = "C:1 " + newString;
    } else if (code === 2){
        newString = "C:2 " + newString;
    } else if (code === 3){
        newString = "C:3 " + newString;
    }

    document.getElementById("encryptOutput").innerHTML = newString; 
}

function decode(string){
    var newString = "";
    var oldString = string;
    oldString = oldString.toLowerCase();
    var code = findType(oldString);

    if (code === 1){
        for (var j = -1; j < oldString.length; j++){
            var i = j + 3;
            if (lineContains(oldString, "1", i)){
                newString += "a";
            } else if (lineContains(oldString, "!", i)){
                newString += "b";
            } else if (lineContains(oldString, "2", i)){
                newString += "c";
            } else if (lineContains(oldString, "@", i)){
                newString += "d";
            } else if (lineContains(oldString, "3", i)){
                newString += "e";
            } else if (lineContains(oldString, "#", i)){
                newString += "f";
            } else if (lineContains(oldString, "4", i)){
                newString += "g";
            } else if (lineContains(oldString, "$", i)){
                newString += "h";
            } else if (lineContains(oldString, "5", i)){
                newString += "i";
            }  else if (lineContains(oldString, "%", i)){
                newString += "j";
            }  else if (lineContains(oldString, "6", i)){
                newString += "k";
            } else if (lineContains(oldString, "^", i)){
                newString += "l";
            } else if (lineContains(oldString, "7", i)){
                newString += "m";
            } else if (lineContains(oldString, "&", i)){
                newString += "n";
            } else if (lineContains(oldString, "8", i)){
                newString += "o";
            } else if (lineContains(oldString, "*", i)){
                newString += "p";
            } else if (lineContains(oldString, "9", i)){
                newString += "q";
            } else if (lineContains(oldString, "(", i)){
                newString += "r";
            } else if (lineContains(oldString, "0", i)){
                newString += "s";
            } else if (lineContains(oldString, ")", i)){
                newString += "t";
            } else if (lineContains(oldString, "<", i)){
                newString += "u";
            } else if (lineContains(oldString, "/", i)){
                newString += "v";
            } else if (lineContains(oldString, "+", i)){
                newString += "w";
            } else if (lineContains(oldString, "|", i)){
                newString += "x";
            } else if (lineContains(oldString, "~", i)){
                newString += "y";
            } else if (lineContains(oldString, "?", i)){
                newString += "z";
            } else if (lineContains(oldString, "_", i)){
                newString += " ";
            } 
        }
    } else if (code === 2){
        for (var j = -1; j < oldString.length; j++){
            var i = j + 3;
            if (lineContains(oldString, "<", i)){
                newString += "a";
            } else if (lineContains(oldString, "#", i)){
                newString += "b";
            } else if (lineContains(oldString, "3", i)){
                newString += "c";
            } else if (lineContains(oldString, "8", i)){
                newString += "d";
            } else if (lineContains(oldString, "2", i)){
                newString += "e";
            } else if (lineContains(oldString, "!", i)){
                newString += "f";
            } else if (lineContains(oldString, "+", i)){
                newString += "g";
            } else if (lineContains(oldString, "*", i)){
                newString += "h";
            } else if (lineContains(oldString, "?", i)){
                newString += "i";
            }  else if (lineContains(oldString, ")", i)){
                newString += "j";
            }  else if (lineContains(oldString, "0", i)){
                newString += "k";
            } else if (lineContains(oldString, "/", i)){
                newString += "l";
            } else if (lineContains(oldString, "&", i)){
                newString += "m";
            } else if (lineContains(oldString, "7", i)){
                newString += "n";
            } else if (lineContains(oldString, "@", i)){
                newString += "o";
            } else if (lineContains(oldString, "$", i)){
                newString += "p";
            } else if (lineContains(oldString, "|", i)){
                newString += "q";
            } else if (lineContains(oldString, "~", i)){
                newString += "r";
            } else if (lineContains(oldString, "6", i)){
                newString += "s";
            } else if (lineContains(oldString, "%", i)){
                newString += "t";
            } else if (lineContains(oldString, "1", i)){
                newString += "u";
            } else if (lineContains(oldString, "^", i)){
                newString += "v";
            } else if (lineContains(oldString, "4", i)){
                newString += "w";
            } else if (lineContains(oldString, "9", i)){
                newString += "x";
            } else if (lineContains(oldString, "(", i)){
                newString += "y";
            } else if (lineContains(oldString, "5", i)){
                newString += "z";
            } else if (lineContains(oldString, "_", i)){
                newString += " ";
            } 
        }
    } else if (code === 3){
        for (var j = -1; j < oldString.length; j++){
            var i = j + 3;
            if (lineContains(oldString, "/", i)){
                newString += "a";
            } else if (lineContains(oldString, "_", i)){
                newString += "b";
            } else if (lineContains(oldString, "<", i)){
                newString += "c";
            } else if (lineContains(oldString, "0", i)){
                newString += "d";
            } else if (lineContains(oldString, "6", i)){
                newString += "e";
            } else if (lineContains(oldString, "9", i)){
                newString += "f";
            } else if (lineContains(oldString, "$", i)){
                newString += "g";
            } else if (lineContains(oldString, "4", i)){
                newString += "h";
            } else if (lineContains(oldString, "?", i)){
                newString += "i";
            }  else if (lineContains(oldString, "*", i)){
                newString += "j";
            }  else if (lineContains(oldString, "3", i)){
                newString += "k";
            } else if (lineContains(oldString, ")", i)){
                newString += "l";
            } else if (lineContains(oldString, "8", i)){
                newString += "m";
            } else if (lineContains(oldString, "~", i)){
                newString += "n";
            } else if (lineContains(oldString, "7", i)){
                newString += "o";
            } else if (lineContains(oldString, "%", i)){
                newString += "p";
            } else if (lineContains(oldString, "#", i)){
                newString += "q";
            } else if (lineContains(oldString, "+", i)){
                newString += "r";
            } else if (lineContains(oldString, "@", i)){
                newString += "s";
            } else if (lineContains(oldString, "^", i)){
                newString += "t";
            } else if (lineContains(oldString, "2", i)){
                newString += "u";
            } else if (lineContains(oldString, "1", i)){
                newString += "v";
            } else if (lineContains(oldString, "(", i)){
                newString += "w";
            } else if (lineContains(oldString, "|", i)){
                newString += "x";
            } else if (lineContains(oldString, "&", i)){
                newString += "y";
            } else if (lineContains(oldString, "5", i)){
                newString += "z";
            } else if (lineContains(oldString, "!", i)){
                newString += " ";
            } 
        }
    }

    newString = newString.split('');
    newString.splice(0, 1);
    newString = newString.join('');

    document.getElementById("decodeOutput").innerHTML = newString; 
}
