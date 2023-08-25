const main = document.getElementById("main");
const circle = document.getElementById("circle");
const square = document.getElementById("square");
const colour = document.getElementById("color");
const shape = document.getElementById("shape");

const col = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];


 
let i = 0;


colour.addEventListener("click",function(){
    circle.style.backgroundColor = col[i];
        
        i = (i+1) % col.length;
});
let isSquare = true;
shape.addEventListener("click",function(){
    if (isSquare) {
       // Change the square to a triangle
       square.style.width = "0";
       square.style.height = "0";
       square.style.borderRight = "150px solid transparent";
       square.style.borderLeft = " solid transparent";
       square.style.borderBottom = "150px solid red";
       square.style.backgroundColor = "transparent"; // Set background color to transparent
    } else {
       // Change the triangle back to a square
       square.style.width = "150px";
       square.style.height = "150px";
       square.style.borderRight = "none";
       square.style.borderLeft = "none";
       square.style.borderBottom = "none";
       square.style.backgroundColor = "white"; // Set the square's background color
    }

    isSquare = !isSquare;
});
