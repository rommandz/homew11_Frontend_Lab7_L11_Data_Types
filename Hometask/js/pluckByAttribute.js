function pluckByAttribute( array, label ) {
    return getTransformedArray(array, function (element) {
        for (var property in element) {
            if (element.hasOwnProperty(property)) {
                if (element[property] === element[label]) {
                    element =  element[property];
                }
            }
        }
        return element ;
    });
}

var presidents = [ { name: "George", surname: "Kush" } ,
                   { name: "Barako", surname: "Obaame" } ];

console.log(pluckByAttribute( presidents, "name" )); // -> ["George", "Barako"]
