// Array Methods in JavaScript
// JavaScript provides powerful built-in methods to perform various operations on arrays.
//Here’s a categorized list of commonly used array methods:

// I] Adding/Removing Elements:

// 1) push(): Adds an element to the end of the array.

let fruits=["apple","mango"]
fruits.push("Bananana")
console.log(fruits) // Output: ["apple","mango",Bananana]

// 2) pop(): Removes the last element from the array.

fruits.pop();
console.log(fruits); //Output:["apple","mango"]

// 3) unshift(): Adds an element to the beginning of the array.

fruits.unshift("Grapes");
console.log(fruits); // Output: ["Grapes", "Apple", "mango"]

// 4) shift(): Removes the first element from the array.
fruits.shift();
console.log(fruits); // Output: ["Apple", "mango"]

// II] Modifying Elements

// 1)splice(): Adds, removes, or replaces elements in an array.

let numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 9, 10); // Removes 2 elements starting from index 1 and adds 9, 10
// numbers.splice(start_index,delete_count, element1,...)
console.log(numbers); // Outpput: [1, 9, 10, 4]

// 2)slice(): Returns a shallow copy of a portion of an array.

let number = [1, 2, 3, 4];
let sliced = number.slice(1, 3); // Extracts elements from index 1 to 2
        // number.slice(start_idx,end_idx)
console.log(sliced); // Output: [2, 3]

// III]Iterating Through Arrays

// 1)forEach(): Executes a function for each array element.

let nums=[1,2,3,45,54]
nums.forEach(number => console.log(number));//Output:[1,2,3,45,54]

// 2)map(): Creates a new array by applying a function to each element.

let square=nums.map(nums=>nums**2)
console.log("square",square) //output:[1, 4, 9, 2025, 2916]

// 3)filter(): Creates a new array with elements that satisfy a condition.

let even=nums.filter(num=>num%2===0)
console.log(even); // Output: [2, 4]

// IV]Searching

// 1)find(): Returns the first element that satisfies a condition.

let result = nums.find(num=>num>2)
console.log(result) //Output: 3

// 2)findIndex(): Returns the index of the first element that satisfies a condition.
 
let index= nums.findIndex(num=>2<num)
console.log(index) //Output: 2

// 3)includes(): Checks if an array contains a specific element.

console.log(nums.includes(54))// Output:true

// V]Combining and Splitting

// 1)concat(): Combines two or more arrays.

let moreNumbers = [5, 6];
let combined = numbers.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 45, 54,5, 6]

// 2)join(): Joins all elements into a string.

console.log(fruits.join(", ")); // "apple, mango"

// 3)split() (used on strings): Converts a string to an array.

let str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

// VI] Sorting and Reversing

// 1)sort(): Sorts elements alphabetically or by a custom compare function.

let unsorted = [3, 1, 4];
console.log(unsorted.sort()); // [1, 3, 4]


// 2)reverse(): Reverses the array's order.

console.log(unsorted.reverse()) //[4,3,1]

// VII] Reducing Arrays

// 1)reduce(): Reduces the array to a single value by applying a function

let sum = nums.reduce((total, num) => total + num,0);
console.log(sum); // 105

// VIII]  Other Useful Methods

// 1) every(): Checks if all elements satisfy a condition.
console.log(numbers.every(num => num > 0)); // true

// 2)some(): Checks if at least one element satisfies a condition.
console.log(numbers.some(num => num > 3)); // true


// 3)indexOf(): Finds the index of the first occurrence of an element.
console.log(numbers.indexOf(3)); // 2

// 4)isArray(): Checks if a variable is an array.
console.log(Array.isArray(numbers)); // true









