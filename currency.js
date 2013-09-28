/*  function that given a dollar amount returns a object of the 
number of bills and coins needed to return change.

For instance, given 7.23, it should return:
{
  fives: 1,
  ones: 2,
  dimes: 2,
  pennies: 3
}
*/
var currency = function (number) {

    finalnum = Math.abs(parseFloat(number));
    if (finalnum === NaN)
    return "Please enter a valid number";
    finalnum = finalnum.toString();
    for(var i=0; i<=finalnum.length-1; i++) {
        if(finalnum[i-3] ==='.')
            finalnum = finalnum.slice(0,i); //truncate extraneous digits
        
    }
    //console.log(finalnum);
    return finalnum;
}
var change = {
pennies : function (number){}
nickles : function (number){}    
dimes: function (number){}
quarters: function (number){}
ones: function (number){}
fives: function (number){}
tens: function (number){}
twenties: function (number){}
fifties: function (number){}
hundreds: function (number){}
    
}
