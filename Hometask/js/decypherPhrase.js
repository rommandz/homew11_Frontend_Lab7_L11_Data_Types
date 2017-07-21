function decypherPhrase(object, string ) {
    function reversedObject(object) {
        var objectToReverse = {} ;
        for (var property in object) {
            if (!objectToReverse.hasOwnProperty(property)) {
                    objectToReverse[object[property]] = property;
            }
        }
        return objectToReverse ;
    }
    return cypherPhrase(reversedObject(object), string) ;
}

console.log(decypherPhrase(charactersMap, "kiggy dog")) ; // -> kitty cat
