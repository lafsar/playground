var reversal = function(text) {

var newtext = text.split('');
var txet = [];
var i =0;
	for( var index = (newtext.length - 1); (index >=0) && (i<=newtext.length); index--) {
			txet[i] = newtext[index];
			i++;	
	}
txet = txet.join(''); //take out commas
return txet.toString();
}

 