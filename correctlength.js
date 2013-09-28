//iterate through the length of the fragarray
//each element in the array must be a string
//find the length of each element
//if the length matches number, push that element onto a new array
//when finished iterating, return an array of strings

var correctlength = function(fragarray, number) {
var emptyarray = [];
var spacecount = 0;
	for (var len = 0; len <= (fragarray.length-1); len++) {
		var element = fragarray[len];
		if(element) {
			element = element.trim();
		
		if (element.length === number) {
		//console.log(element);
			emptyarray.push(element);
			if (element === "" || element ===" ")
			spacecount++;
			
			
		}
		}
		else if(spacecount === 0)
		return "Null";
		
		
	}
	if(emptyarray.length===0 && number >0 )
		return "no element exists that has that length";
		else if(number <0)
		return "Don't be a jerk!";
	if (spacecount >0)
	return "you have " + spacecount + " empty strings";

return emptyarray;
}