// Array in Javascript

// An array in JavaScript is a data structure used to store multiple values in a single variable.
// Arrays are ordered collections where each value (or element) is associated with an index starting from 0.
// They can hold any type of data, including numbers, strings, objects, or even other arrays.

// Characteristics of array 
// 1) Elements are stored in continuous memory location 
// 2) Accessing each Element from Array using array index 
// 3)Array index always start from 0 index
// 4) In javascript we can create array in dynamically

// Syntax :
// There are three way to declear array 

// 1) Using Array literals
var arr=[]

// 2)Using Array intialzation 
var arr1=[20,30,40]

// 3) Using Constructor
    var arr2= new Array()


// Example:
const cars = ["Element1","Element2","Element3"];

console.log(cars[0])//Output:Elememt1
console.log(cars[1])//Output:Elememt1
console.log(cars[2])//Output:Elememt1 


    // There are two types of Array 
    // 1) Single dimentional Array

    const fruits = ["Apple", "Banana", "Mango"];

    console.log(fruits[0]); // Output: Apple
    console.log(fruits[1]); // Output: Banana

    // 2) Multidimentional Array
    // i)2D Array
    const matrix = [
        [1, 2, 3], // Row 1
        [4, 5, 6], // Row 2
        [7, 8, 9]  // Row 3
      ];
      
      // Accessing elements
      console.log(matrix[0][0]); // Output: 1 (1st row, 1st column)
      console.log(matrix[1][2]); // Output: 6 (2nd row, 3rd column)
       
    //   ii) 3D array 
    const cube = [
        [ // 1st 2D array
          [1, 2],
          [3, 4]
        ],
        [ // 2nd 2D array
          [5, 6],
          [7, 8]
        ]
      ];
      
      // Accessing elements
      console.log(cube[0][1][1]); // Output: 4 (1st 2D array, 2nd row, 2nd column)
      console.log(cube[1][0][0]); // Output: 5 (2nd 2D array, 1st row, 1st column)

    
// The length Property
// The length property of an array returns the length of an array(the number of array elements).

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let len_of_arr = fruits.length;

console.log(len_of_arr) // Output:3





