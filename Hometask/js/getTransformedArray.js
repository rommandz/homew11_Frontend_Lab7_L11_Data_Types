function getTransformedArray(array, fun) {
    var transformedArray = [];
    forEach(array, function (element) {
        transformedArray.push(fun(element)) ;
    });
    return transformedArray ;
}

function increment(num) {
   return num + 1 ;
}

console.log(getTransformedArray( [1, 7, 20], increment )); // -> [ 2, 8, 21 ]
