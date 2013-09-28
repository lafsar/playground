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
  pennies : function (number){
    num = currency(number);
    num = parseInt(num.substring(num.length-3,num.length);
    if(num < 25 && num % 25 < 5  )
        return num
    else if (num > 25 && num < 30)
        return num % 25;
    else if (num >29 && num <40 )
        return (num % 25) - 10;
    else if (
  }
  nickles : function (number){ 
    num = currency(number);
    num = parseInt(num.substring(num.length-3,num.length);
    if(num >= 5 && num <= 9)
        return 1;
    else
        return 0;
}    
  dimes: function (number){ 
      num = currency(number);
    num = parseInt(num.substring(num.length-3,num.length));
    if(num < 25 && num >= 20)
        return 2;
    else if(num >=10 && num <=19 )
        return 1;
}
  quarters: function (number){
   num = currency(number);
    num = parseInt(num.substring(num.length-3,num.length));
    if(num % 25 ===0)
        return num / 25;
    else
        return 0;}
  ones: function (number){
   num = currency(number);
    num = parseInt(num[num.length-4]);
    if(num % 5 !=0)
        return num;
    else
        return 0;}
  fives: function (number){
   num = currency(number);
    num = parseInt(num[num.length-4]);
    if(num % 5===0)
        return num / 5;
    else
        return 0;}
  tens: function (number){
   num = currency(number);
    num = parseInt(num.substring(num.length-5,num.length-3));
    if(num % 25 !=0)
        return num;
    else
        return 0;}
  twenties: function (number){
   num = currency(number);
    num = parseInt(num[num.length-1]);
    if(num % 5 !=0)
        return num;
    else
        return 0;}
  fifties: function (number){
   num = currency(number);
    num = parseInt(num[num.length-1]);
    if(num % 5 !=0)
        return num;
    else
        return 0;}
  hundreds: function (number){
   num = currency(number);
    num = parseInt(num[num.length-1]);
    if(num % 5 !=0)
        return num;
    else
        return 0;}
    
}
