function getTopNRichestNames(n, arrayOfObj) {
    var objNumbers = {
        B : "e9" ,
        M : "e6" ,
        K : "e3"
    } ;
    var arrayOfIncome = pluckByAttribute(arrayOfObj, "income") ;
    arrOfIncome = arrayOfIncome.map(function (element) {
         return cypherPhrase(objNumbers, element) ;
    });
    for (var i = 0; i < arrayOfObj.length; i++) {
        arrayOfObj[i].income = 1 * arrOfIncome[i] ;
    }
    arrayOfObj.sort( (a, b) => b.income - a.income );
    return pluckByAttribute(arrayOfObj, "name").slice(0 , n) ;
}

var people = [
        {name: 'Bara', income: '1B'},
  	    {name: 'Dara', income: '5B'},
  	    {name: 'Kara', income: '1M'},
  	    {name: 'Zara', income: '2K'}
  ];

console.log(getTopNRichestNames(2, people)) ; // -> "Dara", "Bara"
