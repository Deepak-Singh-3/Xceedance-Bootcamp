//ES5
function driversLicence5(passedTest) {
    if (passedTest) {
       // console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
}
}
 console.log(firstName + ', born in ' + yearOfBirth + ', is now	officially allowed to drive a car.');
driversLicence5(true);

//ES6

function driversLicence6(passedTest) {
    //console.log(firstName);
    if (passedTest) {
		 let firstName = 'John';
    	const yearOfBirth = 1990;
	 console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');	
    }
}
driversLicence6(true);