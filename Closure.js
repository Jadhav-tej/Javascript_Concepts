// Closure
// A closure is the combination of a function bundled together (enclosed)
//  with references to its surrounding state (the lexical environment). 
//  In other words, a closure gives a function access to its outer scope. 
//  In JavaScript, closures are created every time a function is created, at function
//   creation time.

// Example1 
function Outerfun() {
    var name = "Mozilla"; // name is a local variable created by init

    function innerfunction() {
      // displayName() is the inner function, that forms a closure

      console.log(name); // use variable declared in the parent function
    }
    innerfunction();
  }
  Outerfun(); //Output:Mozila
  
//   Example2 

function Outerfun1() {
    let name = "Mozilla"; // name is a local variable created by init

    function innerfunction() {
      // displayName() is the inner function, that forms a closure

      console.log(name); // use variable declared in the parent function
    }
    return innerfunction
   
  }
  const newfun=Outerfun1(); //Output:Mozila
  newfun()

//   Example3 
function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2