// String 
// Strings are useful for holding data that can be represented in text form.
// Strings are sequences of characters enclosed in single (' '), double (" "), or backticks (` `). 
// They allow you to work with textual data effectively.

// Examples of String Operations:

// 1) Concatenation: 
let firstName = "Tejas";
let lastName = "Jadhav";
console.log(firstName.concat(lastName)); // Output: TejasJadhav

// 2)Accessing Characters:
let text = "JavaScript";
console.log(text[0]); // Output:J


// 3)Case Conversion:
console.log(text.toUpperCase()); //Output: JAVASCRIPT
console.log(text.toLowerCase()); //Output: javascript

//4) Length Property:
console.log(text.length); //Output 10

// 5)Substring Extraction 

let txt= "Tejas Jadhav"
console.log(txt.slice(0,6)) //output Tejas
console.log(txt.slice(-6))//Output Jadhav (negative index counts from the end)
console.log(txt.substring(2,5))// Output jas

// 6) Finding Substrings 

let message = "Learning JavaScript is fun!";
console.log(message.indexOf("JavaScript")); //Output: 9
console.log(message.lastIndexOf("is")); //Output 21

// 7)Checking Presence of Substrings 
let sentence = "JavaScript is powerful.";
console.log(sentence.includes("powerful")); // true
console.log(sentence.includes("era")); // false

// 8) Repeating Strings

let word = "Tejas"
console.log(word.repeat(3)) //Output TejasTejasTejas

// 9)  Splitting Strings

let name="Tejas, Ranjendra, Jadhav"
console.log(name.split(","))  //Output ['Tejas', ' Ranjendra', ' Jadhav']

// 10)Trimming Whitespaces

let n="     Tejas JAdhav     "
 console.log(n.trim())// Output : "Tejas Jadhav"
 console.log(n.trimStart())// Output : "Tejas Jadhav    "
 console.log(n.trimEnd())// Output : "    Tejas Jadhav"

//  11) Replacing Substrings

let greeting = "Hello, World!";

console.log(greeting.replace("World!","Javascript")) //Output "Hello, JavaScript!"

console.log(greeting.replaceAll("ll","bb"))// Output:  Hebbo, World!


// 12)Character Codes

let char = "A";
console.log(char.charCodeAt(0)); //Output: 65
console.log(String.fromCharCode(66)); //Output: "A"



