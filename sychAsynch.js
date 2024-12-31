// Synchronous Programming 

 // synchronous means the code runs in particular sequence of instruction  given in the  prgram .Each instruction wait for the previous instruction to complete its execution

console.log("One")
console.log("two")
console.log("Three")


// Asynchrounos Programming 

// Due to synchrouns programming,sometimes imp get blocked due to some previous instruction ,which cause delay in the  UI.Asynchronous code exicution allow to excute next instruction immediatly and doesnt block the flow

console.log("One")
console.log("two")
setTimeout(()=>{
    console.log("three")
},2000)

console.log("four")

// Output 
One
two
four 
three // after two sec