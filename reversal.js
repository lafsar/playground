var reversal = function(text) {

var newtext = text.split('');//turn string into array of characters
var txet = [];
var i =0;

	for( var index = (newtext.length - 1); (index >=0) && (i<=newtext.length); index--) {
		
		// console.log(index)  //testing what element of the array im in;
			
			txet[i] = newtext[index]; //take last element of current array and put in first element of new array
			
			//console.log(txet); //for testing current contents of array
			i++;
		
	}
	txet = txet.join(''); //take out commas
return txet.toString();
}

//console.log(reversal(' what is up ?  ')); test final output
 