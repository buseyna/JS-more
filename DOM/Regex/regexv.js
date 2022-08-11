// let sentence = "The dog chased the cat."
// let regex = /the/

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
//-------------------------------------------------------
// Match Literal Strings

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding); 
//-------------------------------------------------------
// Mtach a Literal String with Different Possibilities

// let petString = "James has a pet cat.";
// let petRegex = /change/;
// let result = petRegex.test(pet.petString);

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|fish|bird/;
// let result = petRegex.test(pet.petString);
//-------------------------------------------------------
// Ignore Case While Matching 
// let myString = "FreeCodeCamp"
// // let fccRegex = /change/; //Change this line
// let fccRegex = /freecodecamp/; //Change this line
// let result = fccRegex.test(myString);
//-------------------------------------------------------
// Extract Matches
// let extractStr = "Extract the word 'coding' from this string.";
// // let codingRegex = /change/;
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);
//-------------------------------------------------------
// Find More Than the First Match
// let testStr = "Repeat, Repeat, Repeat ";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);

// let twinkleStar = "Twinkle, twinkle, little star";
// // let starRegex = /change/;
// let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex);
// console.log(result);
//-------------------------------------------------------
// Match Anything with Wildcard Period
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// humStr.match(huRegex); // Returns ["hum"]
// hugStr.match(huRegex); // Returns ["hug"]

// let exampleStr = "Let's have fun with regular expressions!";
// // let unRegex = /change/;
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result);
//-------------------------------------------------------
// Match Single Character with Multiple Possibilities
// let bgRegex = /b[aiu]g/;
// let qouteSample = "Beware of bugs in the above code; I have only proved it corr"
// // let vowelRegex = /change/;
// let vowelRegex = /[aeiou]/ig;
// let result = qouteSample.match(vowelRegex);
// console.log(result);
//-------------------------------------------------------
// Match Letters of the Alphabet 
// let qouteSample = "The quick brown fox jumps over the lazy dog.";
// // let alphabetRegex = /change/;
// let alphabetRegex = /[a-z]/ig;
// let result = qouteSample.match(alphabetRegex);
// console.log(result);
//-------------------------------------------------------
// Match Numbers and Letters of the Alphabet 
// let qouteSample = "Blueberry 3.141592653s are delicios.";
// // let myRegex = /change/;
// // let myRegex = /[2-6]/;
// let myRegex = /[2-6h-s]/ig;
// let result = qouteSample.match(myRegex);
// console.log(result);
//-------------------------------------------------------
// Match Single Characters Not Specified
// let qouteSample = "3 blind mice";
// // let alphabetRegex = /change/;
// let myRegex = /[^0-9aeiou]/ig;
// let result = qouteSample.match(myRegex);
// console.log(result);
//-------------------------------------------------------
// Match Characters that Occur One or More Times
// let difficultsSpelling = "Mississippi";
// // let myRegex = /chamge/;
// let myRegex = /s+/g;
// let result = difficultsSpelling.match(myRegex);
// console.log(result);
//-------------------------------------------------------
// Match Characters that Occur Zero or More Times
// let soccerWord = "gooooooooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); //Returns ["gooooooooooooo"]
// oPhrase.match(goRegex);  //Returns ["o"]
// gPhrase.match(goRegex);   //Returns ["g"]

// let chewieQoute = "Aaaaaaaaaaaaaaaaargh";
// // let chewieRegex = /change/; //Change this line
// let chewieRegex = /Aa*/; //Change this line
// let result = chewieQoute.match(chewieRegex);
// console.log(result);
//-------------------------------------------------------
// Find Characters with Lazy Matching
// let string = "titanic";
// // let regex = /t[a-z]*i/;
// let regex = /t[a-z]*?i/; //Lazy match
// string.match(regex);

// let text = "<h1>Winter is coming</h1>";
// // let myRegex = /<.*>/;
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);
//-------------------------------------------------------
//Find One or More Criminals in a Hunt
// let crowd = "P1P2P3P4P5P6CCCP7P8P9";
// let reCriminals = /C+/; //Change this line 
// let matchedCrinimals = crowd.match(reCriminals);
// console.log(matchedCrinimals);
//-------------------------------------------------------
//Match Beginning String Patterns
// let rickyAndCal = "Cal and Ricky both like racing";
// // let calRegex = /change/;
// let calRegex = /^Cal/; //Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result);
//-------------------------------------------------------
//Match Ending String Patterns
// let caboose = "The last car on a train is the caboose";
// // let lastRegex = /change/;
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);
//-------------------------------------------------------
// Match All Letters and Numbers 
// let qouteSample = "The five boxing wizards jump quickly";
// // let alphabetRegexV2 = /change/; 
// let alphabetRegexV2 = /\w/g;
// let result = qouteSample.match(alphabetRegexV2).length
// console.log(result);
//-------------------------------------------------------
// Match Not A Letters and Numbers 
// let qouteSample = "The five boxing wizards jump quickly";
// // let alphabetRegexV2 = /change/;
// let nonAlphabetRegexV2 = /\W/g;
// let result = qouteSample.match(nonAlphabetRegexV2).length
// console.log(result);
//-------------------------------------------------------
//Match All Numbers 
// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g;
// let result = numString.match(numRegex).length;
// console.log(result);
//-------------------------------------------------------
// //Match All Non - Numbers
// let numString = "Your sandwich will be $5.00";
// let nonNumRegex = /\D/g;
// let result = numString.match(nonNumRegex).length;
// console.log(result);
//-------------------------------------------------------
//Restrict Possible Usernames
/* 
1) If there are numbers , they must be at the end .
2) Letters can be lowercase and uppercase.
At least two characters long. Two-Letter names can't have numbers. 
*/
// let username = "JackOfAllTrades";
// // let userCheck = /change/;
// let userCheck = /^[A-Za-z]{2,}\d*$/;
// let result = userCheck.test(username);
// console.log(result);
//-------------------------------------------------------
//Match Whitespace 
// let sample = "Whitespace is important in separating words";
// // let countWhiteSpace = /change/;
// let countWhiteSpace = /\s/g;
// let result = sample.match(countWhiteSpace);
// console.log(result);
//-------------------------------------------------------
//Match Non- Whitespace Characters
// let sample = "Whitespace is important in separating words";
// // let countWhiteSpace = /change/;
// let countWhiteSpace = /\S/g;
// let result = sample.match(countWhiteSpace);
// console.log(result);
//-------------------------------------------------------
//Specify Upper and Lower Number of Matches 
// let ohStr = "Ohhh no";
// // let ohRegex = /change/;
// let ohRegex = /Oh{3,6} no/;
// let result = ohRegex.test(ohStr);
// console.log(result);
//-------------------------------------------------------
//Specify Only the Lower Number of Matches 
// let haStr = "Hazzzzah";
// // let ohRegex = /change/;
// let haRegex = /z{4,}/;
// let result = haRegex.test(haStr);
// console.log(result);
//-------------------------------------------------------
//Specify Exact Number of Matches 
// let timStr = "Timmmmber";
// // let ohRegex = /change/;
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);
// console.log(result);
//-------------------------------------------------------
//Check for All or Non
// let favWord = "favorite";
// let favRegex = /favou?rite/;
// let result = favRegex.test(favWord);
// console.log(result);
//-------------------------------------------------------
//Positive and Negative Lookahead
// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/; //Positive lookahead
// let qRegex = /q(?!u)/; //Negative Lookahead
// quit.match(quRegex); //Returns ["q"]
// noquit.match(qRegex); //Returns ["q"]

// let sampleWord = "astronaut";
// // let pwRegex = /change/;
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log(result);
//-------------------------------------------------------
//Reuse Patterns Using Capture Groups
// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); //Returns true
// repeatStr.match(repeatRegex); //Returns ["regex regex","regex"]

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);
// console.log(result);
//-------------------------------------------------------
//Use Capture Group to Search and Replace
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
//  let result = wrongText.replace(silverRegex, "blue");
// //Returns "The sky is blue"
// console.log(result);


// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')
// //Returns "Camp code" 
// console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));


// let huhText = "This sandwich is good.";
// // let fixRegex = /change/; //Change this line 
// let fixRegex = /good/; //Change this line 
// // let replaceText = ""; //Change this line 
// let replaceText = "okey-dokey"; //Change this line 
// let result = huhText.replace(fixRegex, replaceText);
// console.log(result);
//-------------------------------------------------------
// //Remove Whitespace from Start and End 
// let hello = "   Hello, World!  ";
// // let wsRegex = /change/;
// let wsRegex = /^\s+|\s+$/g;
// // let result = hello; //Change this libne
// let result = hello.replace(wsRegex, ''); //Change this libne
// console.log(result);
//-------------------------------------------------------
//Conclusion
//console.log("Congratulations!!!");
