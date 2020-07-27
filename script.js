
let black = "check" 
let ranbow;
let gray;   
function creatDiv(){ 
    for (let i = 0; i < 256; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("divBox");
        let mainDiv = document.querySelector("#div1");
        mainDiv.appendChild(newDiv);
        newDiv.addEventListener("mouseover", color)
        newDiv.style.backgroundColor = "white"
        newDiv.style.filter = "brightness(100%)";
        newDiv.style.height = ((600-(16*2))/16) + ("px");
        newDiv.style.width = ((600-(16*2))/16) + ("px");
    }
}
window.addEventListener("load", creatDiv)

function color(e) {
if( black == "check") { 
this.style.background = "black" 
console.log(1.2)   
}
else if(rainbow == "check"){ 
var randomColor = Math.floor(Math.random()*16777215).toString(16);
this.style.backgroundColor = "#" + randomColor;
console.log(2 )}


else if(gray == "check"){ 
switch(true){
case this.style.filter == "brightness(100%)":
this.style.filter = "brightness(80%)"
break;
case this.style.filter == "brightness(80%)":
this.style.filter = "brightness(60%)"
break;
case this.style.filter == "brightness(60%)":
this.style.filter = "brightness(40%)"
break;
case this.style.filter == "brightness(40%)":
this.style.filter = "brightness(20%)"
break;
case this.style.filter == "brightness(20%)":
this.style.filter = "brightness(0%)"
break;
    }
  }
}

let grid = document.querySelector(".grid")
grid.addEventListener("click", newGrid)

function newGrid(){
let gridSize = prompt("Grid size");
let divs = document.querySelectorAll(".divBox").forEach(e => e.parentNode.removeChild(e)); 
newGrid2(gridSize)  
} 

function newGrid2(gridSize){
    for (i = 0; i < (gridSize*gridSize); i++){
        var newDiv = document.createElement("div");
        newDiv.classList.add("divBox");
        var mainDiv = document.querySelector("#div1");
        mainDiv.appendChild(newDiv);
        newDiv.addEventListener("mouseover", color)
        newDiv.style.backgroundColor = "white"
        newDiv.style.filter = "brightness(100%)";
        newDiv.style.height = ((600-(gridSize*2))/gridSize) + ("px");
        newDiv.style.width = ((600-(gridSize*2))/gridSize) + ("px");
        console.log(((600-(gridSize*2))/gridSize))
    }
}

let rainbow = document.querySelector(".rainbow")
rainbow.addEventListener("click", randomColor)

function randomColor(){
black = "";
rainbow = "check";
gray;   
}

let graying = document.querySelector(".gray")
graying.addEventListener("click", grayScale)

function grayScale(){
black = "";
rainbow = "";
gray = "check"   
}
