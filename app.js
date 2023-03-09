//getElementById()
const title = document.getElementById("main-heading");
console.log(title);
title.style.fontSize = "22px";

//getelementByClassName()
let listItem = document.getElementsByClassName("list-items");
console.log(listItem);

//getElementByTagName()

let listItemTag = document.getElementsByTagName("li");
console.log(listItemTag);

//querySelectorAll() select the Items inside the div  nodeList
let listItems = document.querySelectorAll("div.container ul li");
console.log(listItems);
listItems.forEach((e) => {
  e.style.backgroundColor = "yellow";
});

//border in first item of list
listItemTag[0].style.border = "1px solid green";

//inside the div ul added one exta element li
const ul1 = document.querySelectorAll("div.container ul"); // select div with className .container
const ul = document.querySelectorAll("div ul"); // select all divs
const ul2 = document.querySelector("div ul"); //select first div ul
console.log(ul);
console.log(ul1);
console.log(ul2);

ul.forEach((e) => {
  const li = document.createElement("li");
  li.innerText = "Sponser";
  e.append(li);
  li.classList.add("list-items");
  li.setAttribute("id", "main-heading");
});

//modify Attributes and classes
let li = document.querySelector("div.containerNext ul li");
console.log(li);
li.setAttribute("class", "demoClass");
li.setAttribute("id", "main-heading");
li.classList.contains("list-items");
console.log(li);

//parent node Traversal
console.log(li.parentNode.parentNode);
console.log(ul2.parentNode);

//childnodes

console.log(ul2.childNodes);

//Event Listeners
//Click
document.getElementById("btn2").addEventListener("click", function(e){
  alert("I also love Javascript");
})

//mouseover 
let box3 = document.querySelector(".box3")
box3.addEventListener("mouseover", (e=>{
  box3.style.backgroundColor = "red";
}))


//select input box input the value and redirect to the page
let input = document.querySelector(".freeTextSearch");
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let value = e.target.value;
    console.log(value);
    href = "jobs?freesearch=" + value;
    console.log(href);
    windows.location.href = href;
    
  }
});


// hide and show more text when click in button
const readMoreBtn = document.querySelector(".readMoreBtn");
const readMoreText = document.querySelector(".readMoreText");

function revealContent(){

  if(readMoreText.classList.contains('readMoreText')){
    readMoreText.classList.remove("readMoreText")
    readMoreBtn.innerHTML = "Hide Text";
  }else{
    readMoreText.classList.add("readMoreText")
    readMoreBtn.innerHTML = "Read More";
  }
}
readMoreBtn.addEventListener("click", revealContent);

//Event Probagation