// task 2.1  --- How many Female and Male?

function getGender(users){
    var obj = {
        male:0,
        female:0
    } ;
    for (var i = 0; i < users.length; i++) {
            if (users[i].gender === "Male") {
                obj.male ++ ;
            } else {
                obj.female ++ ;
            }
    }
    return obj ;
}

// task 2.3 --- How many each of color?

function getAllColors(arr) {
    var colors = {};
    for (var i = 0; i < arr.length; i++) {
        if ( colors.hasOwnProperty( arr[i].favorite_color ) ) {
            colors[arr[i].favorite_color] ++ ;
        } else {
            colors[arr[i].favorite_color] = 1;
        }
    }
    return colors ;
}

// task 2.4 --- What is the most favorite color?

function favoriteColor(object) {
    var colorsFav = {} ;
    var max = 0 ;
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (object[property] > max) {
                max = object[property];
            }
        }
    }

    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] === max) {
                colorsFav[key] = max ;
                console.log(`Favorite color is - ${key} , he meets ${max} times`);
            }
        }
    }
    return colorsFav ;
}

// task 2.2 How many favorite unique colors

function uniqueColor(object) {
    var colorunique = {} ;
    var isUnique = false ;
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (object[property] === 1) {
                colorunique[property] = 1;
                console.log( `Unique color is ${property} he meets just once` );
                isUnique = true ;
            }
        }
    }
    if (!isUnique) {
        console.log("Here is not unique colors");
    }
    return colorunique ;
}

// task 2.5 Find out not unique names first_name if there are such?

function getAllFirstNames(arr) {
    var names = {};
    for (var i = 0; i < arr.length; i++) {
        if (names.hasOwnProperty(arr[i].first_name)) {
            names[arr[i].first_name] += 1;
        } else {
            names[arr[i].first_name] = 1;
        }
    }
    return names ;
}

    function nonUniqueNames(object) {
        var isUnique = false;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (object[property] > 1) {
                    isUnique = true;
                    console.log(`Name ${property} is not unique, it repeats ${object[property]} times`);
                }
            }
        }
        if (!isUnique) {
            console.log("Here all names are unique");
        }
    }
