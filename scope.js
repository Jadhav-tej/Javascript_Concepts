// Scope in JavaScript

    // Scope determines where variable are defined and where they can be accesed 

// Types of Scope:

// JavaScript has three types of scope:

    // 1) Global Scope
    // Variables declared outside any function or block belong to the global scope.
    // They can be accessed and modified from anywhere in the program.

    // Example:
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // output:I am global
}
showGlobal();
console.log(globalVar); // output:I am global

    // 2)Function Scope
    // Variables declared inside a function are accessible only within that function.
    // They cannot be accessed from outside the function.
    // Example:
    function myFunction() {
        let functionScopedVar = "I am function-scoped";
        console.log(functionScopedVar); // Output: I am function-scoped
    }
    myFunction();
    console.log(functionScopedVar); // Output: functionScopedVar is not defined

    // 3)Block Scope
    // Variables declared with let or const inside a block ({}) are accessible only within that block.
    // Variables declared with var are not block-scoped (only function-scoped).
    
    // Example:
    {
        let blockScopedVar = "I am block-scoped";
        const anotherBlockVar = "I am also block-scoped";
        console.log(blockScopedVar); // Output:I am block-scoped
    }
    console.log(blockScopedVar); // Error: blockScopedVar is not defined
    