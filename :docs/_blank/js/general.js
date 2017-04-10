// var lifeOutside;

// function max(num1, num2) {

// 	var theLargest;

// 	if (num1 > num2) {

// 		theLargest = num1;
// 	}
// 	else {

// 		theLargest = num2;
// 	}

// 	return theLargest;

// }

// 	console.log(max(Infinity,-Infinity));



// function maxOfThree(num1, num2, num3) {

// 	var theLargest;

// 	if (num1 > num2 && num1 > num3) {

// 		theLargest = num1;
// 	}
// 	else if (num2 > num1 && num2 > num3) {
// 		theLargest = num2;
// 	}
// 	else if (num3 > num1 && num3 > num2) {
// 		theLargest = num3;
// 	}

// 	return theLargest;
// }

// 	console.log(maxOfThree(1, 8, 7));

// function isVowel(letter) {

// 	var vowels = "aeiou";

// 	return vowels.includes(letter);

// }

// console.log(isVowel("e"));


// function doMath(arrayToMath, operation) {

// 	var counter;

// 	if(operation == "+") {
// 		counter = 0;
// 	}

// 	if(operation == "*") {
// 		counter = 0;
// 	}


// 	for(var i = 0; i < arrayToMath.length; i++) {

// 		if(operation == "+") {
// 		counter += arrayToMath[i];
// 	}

// 	if(operation == "*") {
// 		counter *= arrayToMath[i];
// 	}

	
// }

// function sum(arrayToSum) {

// 	var counter = 0;

// 	for(var i = 0; i < arrayToSum.length; i++) {
// 		counter += arrayToSum[i];
// 	}

// 	return counter;

// }

// function multiply(arrayToMultiply) {

// 	var counter = 1;

// 	for(var i = 0; i < arrayToMultiply.length; i++) {
// 		counter *= arrayToMultiply[i];
// 	}

// 	return counter;

// }

// console.log(sum([1,2,3,4]));
// console.log(multiply([1,2,3,4]));



// function findLongestWord(arrayWords) {

// 	var longest = 0;

// 	for(var i = 0; i < arrayWords.length; i++) {

// 		if(arrayWords[i].length > longest) {
// 		longest = arrayWords[i].length;

// 		}

// 	}

// 	return longest;

// }

// console.log(findLongestWord(["one", "two", "dinosaur", "animal"]));




// function filterLongWords(arrayWords, j) {

// 	var counter = 0;
// 	var filteredArray = [];

// 	for(var i = 0; i < arrayWords.length; i++) {

// 		if(arrayWords[i].length > j) {

// 			filteredArray.push(arrayWords[i]);

// 		}
// 	}

// 	return filteredArray;
// }

// console.log(filterLongWords(["cat", "hat", "trampoline", "racecar", "dinosaur"], 3));

// function reverse(reverseString) {

// 	var stringReversed = "";

// 	for(var i = reverseString.length - 1; i >= 0; i--) {

// 		stringReversed += reverseString[i];

// 	}

// 	return stringReversed;

// }

// console.log(reverse("jag testar"));


// function isVowel(letter) {

// 	var vowels = "aeiou";

// 	return vowels.includes(letter);
// }

// function translate(stringToTranslate) {

// 	var translatedString = "";

// 	for(var i = 0; i < stringToTranslate.length; i++) {

// 		if(isVowel(stringToTranslate[i])) {

// 			translatedString += stringToTranslate[i];

// 		}
// 		else {
// 			translatedString += stringToTranslate[i] + "0" + stringToTranslate[i];
// 		}
// 	}

// 	return translatedString;

// }

// console.log(translate("this is fun"));


// var lexicon = {"merry":"good", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"ar"};

// function translate(stringToTranslate) {

// 	stringToTranslate = stringToTranslate.toLowerCase();

// 	var splitArray = stringToTranslate.split(" ");

// 	var translatedString = "";

// 	for(var i = 0; i < splitArray.length; i++) {

// 		translatedString += lexicon[splitArray[i]] + " ";

// 		// console.log(lexicon[splitArray[i]]);

// 	}

// 	return translatedString;

// }

// console.log(translate("Merry Christmas and happy new year"));




// for (var i = 0; i < 10; i++) {

	
	
// }




















// let targetNumber = Math.floor(Math.random() * 10) + 1;

// function init () {
  
//   document.getElementByID("myBtn").addEventListener("click",
  
//   	function(){ 

//   		console.log(document.getElementByID("myInput").value);
        

//             };
             
// }

// function check (value) {
  
// }

// function showWin () {
  
// }

// function showError () {
  
// }

// function showLoss () {
  
// }

// init();





// function countChar(myString, myChar) {

// 	var numChar = 0;

// 	for (var i = 0; i < myString.length; i++){
// 		if (myString.charAt(i) == myChar) {
// 			numChar++;
// 		}
// 	}
// 	return numChar;


// }

// console.log(countChar("An Apple a day keeps the doctor away.", "a"));

// function evaluateStudent(data) {

// 	console.log(data);

// }

// var myArray = ["tori", "baharat", "sloan", "dc", "harrison", "tanner"];

// myArray.map(evaluateStudent);



// create an array of numbers
// var numbers = [1, 367, 25, 67, 4];

// Add up the numbers in the array.
// function sum() = numbers.reduce(
 
//     return accumulator + currentValue;
//   }, 
 
// );

// // print the sum
// console.log(sum);


// var targetElement = document.getElementById("aim-here");

// function writeHeaders(listHeaders) {

// 	console.log(listHeaders);

// }

// function writeData(listData) {

// 	for (var index = 0; index < Object.values(listData).length; index ++) {

// 		console.log(Object.values(listData)[index]);

// 		targetElement.innerHTML += "<p>" + Object.values(listData)[index] + "</p>"; 

// 	}

// }

// var mountains = {

// 	tableHeaders: ["name", "height", "country"],

// 	tableData: [

// 		{

// 			name: "Kilimanjaro",
// 			height: 5895,
// 			country: "Tanzania"

// 		},

// 		{

// 			name: "Everest",
// 			height: 8848,
// 			country: "Nepal"

// 		},

// 		{

// 			name: "Mount Fuju",
// 			height: 3776,
// 			country: "Japan"

// 		},

// 		{

// 			name: "Mont Blanc",
// 			height: 4808,
// 			country: "Italy/France"

// 		},

// 		{

// 			name: "Vaalserberg",
// 			height: 323,
// 			country: "Netherlands"

// 		},

// 		{

// 			name: "Denali",
// 			height: 6168,
// 			country: "United States"

// 		},

// 		{

// 			name: "Popocatepetl",
// 			height: 5465,
// 			country: "Mexico"

// 		},

// 	],

// };

// targetElement.innerHTML = "<table>"

// mountains.tableHeaders.forEach(writeHeaders);

// mountains.tableData.forEach(writeData);



// console.log(targetElement);





// function isPalindrome(str) {

// 	var stringReverse = str.split("").reverse().join("");

// 	return stringReverse === str;

// }


// console.assert( isPalindrome("tacocat") === true );
// console.assert( isPalindrome("Tacocat") === false );
// console.assert( isPalindrome("racecar") === true );
// console.assert( isPalindrome("cowboy") === false );


// console.log( isPalindrome("tacocat"));
// console.log( isPalindrome("Tacocat"));
// console.log( isPalindrome("racecar"));
// console.log( isPalindrome("cowboy"));
// console.log( isPalindrome("noon"));
// console.log( isPalindrome("The Cake Is A Lie, eiL A sI ekaC ehT"));




// Write a method complements(array, number)
// which returns true if any two numbers in the array sum to the same number.

// function complements(myArray, mySum){

// 	var hasComplement = false;

// 	for(var i = 0; i < myArray.length - 1; i++) {

// 		for(var j = 0; j <myArray.length - 1; j++) {

// 			if (i != j)

// 			if ((myArray[i] + myArray[j]) == mySum)
// 				hasComplement = true;

// 		}

// 	}

// 	return hasComplement;

// }

// var odds = [1, 3, 5, 7, 9, 11];
// var ints = [-11, 40, 17, -5, -1, -11, 2, 9];

// console.assert( complements(odds, 4) === true );
// console.assert( complements(odds, 1) === false );
// console.assert( complements(ints, -22) === true );
// console.assert( complements(ints, 16) === true );
// console.assert( complements(ints, 40) === false );

// console.log( complements(odds, 4));
// console.log( complements(odds, 1));
// console.log( complements(ints, -22));
// console.log( complements(ints, 16));
// console.log( complements(ints, 40));
// console.log( complements(odds, 37));
// console.log( complements(ints, 57));


// /* Create a function that will take in one paramater. The parameter is an array. Each element within the array is a string. The function returns the longest string within the array. If two or more strings in the array are of the same length, the function returns the first string with that length
// */
// var theArray = ["DC", "Sloan", "Bharat", "Tori", "Tanner", "Harry"];
// function longestString (ourArray) {
//     var word = "";
//     for (var i = 0; i < ourArray.length; i++) {
//         if (ourArray[i].length > word.length) {
//             // i = 0 "DC" "" word="DC" 
//             // i = 1 "Sloan" "DC" word="Sloan"
//             // i = 2 "Bharat" "Sloan" word="Bharat"
//             // i = 3 "Tori" "Bharat" word="Bharat"
//             // i = 4 "Tanner" "Bharat" word="Bharat"
//             // i = 5 "Harry" "Bharat" word ="Bharat"
//             word = ourArray[i];
//         }
//     }
//     return word;
// };
// console.log(longestString(theArray));

// here's the first variable assignment you'll need
// you'll need to to assign the other 2 numbers yourself
// var firstNumber = 50;
// var secondNumber = 100;
// var thirdNumber = 500;
// // add them together using + and store them in the sum variable
// var sum = firstNumber + secondNumber + thirdNumber;

// // finally, print the sum
// console.log(sum);


// var total = ((42 - 8) + 24 / 6 - 3 * 0) * (34 + (7 + (4 + 3) % 3) / 2);

// console.log(total);

// var addition2 = 7 + 13;
// console.log(addition2);

// var addition3 = (7 + 13) + 21;
// console.log(addition3);

// var addPosNeg = 7 + -13;
// console.log(addPosNeg);

// var subtract2 = 7 - 13;
// console.log(subtract2);

// var subtract3 = (7 - 13) - 21;
// console.log(subtract3);

// var subtractPosNeg = (-7 + 13) - 8;
// console.log(subtractPosNeg);

// var combineAddSub = (7 + -13) - 21;
// console.log(subtractPosNeg);

// var multiply2 = 7 * 13;
// console.log(multiply2);

// var multiplyThree1Neg = (7 * 13) * -21;
// console.log(multiplyThree1Neg);

// var divide2 = 7 / 13;
// console.log(divide2);

// var divide3 = (7 / 13) / 21;
// console.log(divide3);

// var modulo2 = (25 % 4);
// console.log(modulo2);

// var complicatedExpression = (((7 + -13) - ((-21 * 7) / 13)) % 21);
// console.log(complicatedExpression);


// var partsMoney = true;

// var timeOff = false;

// var difficultFix = false;

// //Am I working on the car?

// console.log(partsMoney && (timeOff || !difficultFix));


// var firstName = "Julia";
// var lastName = "Roberts";
// var fullName = firstName + " " + lastName; //Modified to include a space between firstName and lastName.

// console.log(fullName); // Julia Roberts

// function academicStanding (gpa) {
//     var standing;
    
//     if (gpa < 2.0) {
//         standing = "Student is on academic probation.";
//     }
    
//     else if (gpa < 3.40) {
//         standing = "Student is in good standing";
//     }

//     else if (gpa < 3.60) {
//         standing = "Student is in good standing with cum laude.";
//     }

//     else if (gpa < 3.8) {
//         standing = "Student is in good standing magna with cum laude.";
//     }

//     else if (gpa <= 4.00) {
//         standing = "Student is in good standing with summa cum laude.";
//     }

//     else if (gpa > 4.00) {
//         standing = "Student GPA falls outside of acceptable range.";
//     }

//     return standing;
// }

// console.log(academicStanding(1.9));

// console.log(academicStanding(2.5));

// console.log(academicStanding(3.45));

// console.log(academicStanding(3.67));

// console.log(academicStanding(3.83));

// console.log(academicStanding(4.01));


// for (var i = 0; i < 100; i+=3) {
//     console.log(i);
// }

// var currentTime = new Date().valueOf();


// while ( currentTime % 100 != 0){
//     console.log(new Date().valueOf());
//     currentTime = new Date().valueOf();
// };



// for(var i = 0; i < 2021; i++){
//     if( (i%4 == 0) && (i%400 == 0 || i%100 !== 0) ) {
//     console.log(i);
//         }
// };

// var result;

// function half(number){
//   return number / 2;
// }

// result = half(100)

// console.log(result);

function analyzeData()


$.ajax({
  url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=4d5ab9a18a2502d014158b2e4142ce44',
  success: function successHandler(data) {
    console.log("The Cake Is A Lie!");
    console.log("The Cake Is Still A Lie!");
    console.log(data.attributionHTML);
  }
});


