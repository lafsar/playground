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

//convert int, float or string to valid format first
var currency = function (number) {
var denominations = [1,5,10,25,100,500,1000,2000,5000,10000];  
    var finalnum = number.toString();
    //console.log(finalnum);
    for(var i=0; i<=finalnum.length-1; i++) {
        if(finalnum[i] ==='.'){
            finalnum= finalnum.split("");
            finalnum.splice(i,1); 
           // console.log(finalnum);
            if(finalnum[i] != null){
                finalnum = finalnum.slice(0,i+2);
           // console.log(finalnum)    
            }
         }//truncate extraneous digits
    }
  
    //if (typeof finalnum != 'string'); 
     
     if( Object.prototype.toString.call(finalnum ) === '[object Array]' )
        finalnum=finalnum.join(''); //if result is an array make it a string
var tempmoney = [];    
 for (var x=denominations.length-1; x>=0; x--) {
 var denom = denominations[x];
     var divided = Math.floor(finalnum / denom);
     console.log(finalnum);
     if (divided >= 1){
        tempmoney[x] = divided;
         //console.log(tempmoney);
         finalnum -= divided * denominations[x];
     }
     if (finalnum ==0)
         break;
 
 }
    return tempmoney;
}

