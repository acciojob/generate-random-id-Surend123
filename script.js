function makeid(l) {
  // write your code here
	let res="";
	// let big_charlist = "QWERTYUIOPASDFGHJKLZXCVBNM";
	// let small_charlist ="qwertyuiopasdfghjklzxcvbnm";
	// let listOfNumber ="0123456789";
	let charString = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

	for(let i=1;i<=l;i++){
		res+=charString.charAt(Math.floor(Math.random()*charString.length));
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
