
// Change the text in HTML file 
const title = document.getElementById("title");
const changeTextButton = document.getElementById("changeText");

changeTextButton.addEventListener("click", () => {
  title.textContent = "Dom is fun !";
});

// Add the new item in List 
const list=document.getElementById("list")
const addItemButton= document.getElementById("addItem")

addItemButton.addEventListener("click",()=>{
    const newItem=document.createElement("li")
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}) 

const highlightButton = document.getElementById("highlight");
const paragraph = document.querySelector(".description");

highlightButton.addEventListener("click", () => {
  paragraph.classList.toggle("highlight");
});



