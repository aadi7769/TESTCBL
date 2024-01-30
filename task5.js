

///////////////////////////////////DIFFERENCES BETWEEN VAR LET AND CONST/////////////////////////////
// 1. SCOPE :

// VAR: Function-scoped. Declared anywhere within a function, it's accessible everywhere in that function, even in nested blocks. This can lead to unexpected behavior and errors.

// LET: Block-scoped. Declared within a block (e.g., if statement, loop), it's only accessible within that block and nested blocks. This offers better control and avoids accidental global variable creation.

// CONST : Same block scope as let.


// 2. MUTABLILITY:

// var: Can be reassigned any value throughout its scope (function).
// let: Can be reassigned during its scope, but re-declaration within the same scope is disallowed.
// const: Cannot be reassigned or re-declared at all. It truly represents a constant value.

// 3. Hoisting:

// var: Declarations are hoisted to the top of their scope
// but initialized with undefined before actually being assigned a value. This can lead to errors if used before assignment.


// let and const: Declarations are also hoisted, but not initialized. 
// Trying to access them before assignment results in a ReferenceError.



////////////////////////////////////////USE CASES AND LIMITATIONS///////////////////

// var: Primarily used in older code bases due to being the only option before ES6.
// Avoid using var in new code due to its unpredictable scope and hoisting behavior.

// let: The preferred choice for most variable declarations. Use it when you need to:
// =>   Reassign values within a block.
// => Control variable scope for better code organization and safety.

// CONST: Use it for values that you don't want to change throughout your program, such as:
// => Constants like mathematical values (e.g., PI = 3.14159).
// =>Configuration values.
// => API endpoints or keys.

//EXAMPLES

//LIMITATION OF VAR 

//1.
// function outerFunction() {
//     var message = "Hello"; // accidentally creates a global variable!
//     function innerFunction() {
//       console.log(message); // outputs "Hello"
//     }
//     innerFunction();
//   }
//   outerFunction();
  
//   // Now "message" is accessible everywhere, potentially causing conflicts with other code.
  
//2.
// function example() {
//     if (true) {
//       var x = 10;
//     }
//     console.log(x); // Error: ReferenceError: x is not defined
//   }
//   example();
  
  // Trying to access x before it's assigned in the if block leads to an error.
  




/////////////////LIMITATION OF LET

// for (let i = 0; i < 5; i++) {
//     console.log(i); // outputs 0, 1, 2, 3, 4
//   }
//   // i is no longer accessible outside the loop
//   console.log(i); // Error: ReferenceError: i is not defined
  
//   // To use i outside the loop, you'd need to declare it in a broader scope like the function.
  




////////////////////LIMITATION OF CONST

// IMUTUABLE
// const obj = { value: 10 };

// // obj itself is constant, but its property can be changed
// obj.value = 20;
// console.log(obj.value); // outputs 20

// // However, to create a new object with a different value, you need:
// const newObj = { ...obj, value: 30 };

// // This can be less efficient than directly modifying the original object.










//////////////////USE CASES

//USING VAR KEYWORD THE SCOPE OF IT IS GLOBAL SCOPE  WHEREAS THE SOCPE OF LET AND CONST IS LOCAL

function example1() {
    
    if (true) {
     var x = 10; // assigned a value
    }
    console.log(x); // outputs 10  IT IS DEFINED INSIDE THE  CODE BUT ACCESED OUTSIDE IT SO VAR IS AVOIDED NOW
  }
  
  example1();
  


 //USING THE LET KEYWORD 
  function example2() {
    for (let i = 0; i < 5; i++) {
      console.log(i); // outputs 0, 1, 2, 3, 4    LOCAL SCOPE OF THE LET ASSIGNED I CANNOT BE ACCESESD OUTSIDE
    }
    // cannot access "i" outside the loop
  }
  example2();
  


  // Example 3: Const for constants
  const PI = 3.14159;                                     // Both constants cannot be reassigned
  const BASE_URL = "https://api.example.com";
