// Function:
// A function is a set of instructions that performs a specific task when invoked (called).
//  Functions allow us to write logic once and use it multiple times, making our programs efficient and cleaner.

// Function Syntax:
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
  
//Types of Functions in JavaScript

// 1)Function Declaration:
// These are the standard way to declare functions using the function keyword.
// Example:
function fun1() {
    console.log("Hello, World!");
}
fun1(); // Output: Hello, World!

// 2)Function Expression:
// Here, a function is assigned to a variable.
// Example 
const fun2 = function() {
    console.log("Hello, World!");
};
fun2(); // Output: Hello, World!

// 3)Arrow Functions (ES6):
// An arrow function is a shorter and more concise way to write functions in JavaScript. 
// Example
const fun3 = () => {
    console.log("Hello, World!");
};
fun3(); // Output: Hello, World!

// 4) Anonymous Functions:
// Functions without a name, often used as callbacks.

setTimeout(function() {
    console.log("Executed after 2 seconds!");
}, 2000);
