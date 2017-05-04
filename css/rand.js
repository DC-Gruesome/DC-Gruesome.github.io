var havePlacedX = false; //declaring a variable of havePlacedX and set it to false

var searchArray = []; //declaring a variable of searchArray and set it to empty

var maxX = 10; //declaring a variable of maxX and set it to 10

var maxY = 10; //declaring a variable of maxY and set it to 10

function returnRandomLetter() { //declares a function returnRandomLetter 

    var isLowercase = Math.floor(Math.random()*2); //generates a # between 0 and 1, rounds down and multiplies by 2

    var letter = Math.floor(Math.random()*26); //generates a # between 0 and 1, rounds down and multiplies by 26

    var charCodeIncrement; //

    if(isLowercase == 1) { //

        charCodeIncrement = 97; //a

    }
    else {

        charCodeIncrement = 65; //A

    } //if # is 1: a; else: A 

    var randomCharCode = charCodeIncrement + letter;

    if(randomCharCode == 88) {

        if(!havePlacedX) {
            
            havePlacedX = true;

        }
        else {
            randomCharCode -= Math.floor(Math.random()*10);
        }

    }

    return String.fromCharCode(charCodeIncrement + letter);

}

function generateArray() {

    var tempArray;

    for(var i = 0; i < maxX; i++) {

        tempArray = [];

        for(var j = 0; j < maxY; j++) {

            tempArray.push(returnRandomLetter());

        }

        searchArray.push(tempArray);

    }

}

generateArray();

for(var k = 0; k < searchArray.length; k++)
    console.log(searchArray[k]);