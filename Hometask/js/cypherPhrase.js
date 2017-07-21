function cypherPhrase(object, string) {
    var stringToArray = string.split("") ;
    var phrase = getTransformedArray (stringToArray, function (element) {
        element = object[element] || element ;
        return element ;
    }) ;
    return phrase.join("") ;

}

var charactersMap = {a: "o", c: "d", t: "g"} ;

console.log(cypherPhrase( charactersMap, "kitty cat" )); // -> "kiggy dog"
