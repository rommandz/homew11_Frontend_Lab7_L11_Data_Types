var votes = ["angular","angular","react","react","react","angular","ember","react","vanilla"];
var vote = function (arr) {
    var obj = {} ;
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty( arr[i] )) {
            obj[arr[i]] ++ ;
        } else {
            obj[arr[i]] = 1 ;
        }
    }
    return obj ;
};

console.log(vote(votes));
