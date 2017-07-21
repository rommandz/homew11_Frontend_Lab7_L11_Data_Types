function forEach(array, functionCallback) {
    for (var i = 0; i < array.length; i++) {
        functionCallback(array[i]);
    }
}

forEach( [3, 5, 2], function(el){ console.log(el); } ); // -> 3 5 2
