
const grid = document.querySelector("#sketch-container");
const sizeBtn = document.querySelector("#size-btn");
const resetBtn = document.querySelector("#reset-btn");
const changeColorBtn = document.querySelector("#change-color-btn");
const rgbBtn = document.querySelector("#rgb-btn");
const randomBtn = document.querySelector("#random-color-btn");
let isDrawing = false;
let rgb = false;

let size = 16;
let color = "grey";

grid.onmousedown = () => (isDrawing = true);
grid.onmouseup = () => (isDrawing = false);

randomBtn.addEventListener("click", () => {
  rgb = true;
});

resetBtn.addEventListener ("click", (e) => {
  redrawGrid();
});

sizeBtn.addEventListener ("click", (e) => {
  let newSize = prompt("Choose your size between 1 and 99");
  if (!isNaN(newSize) && newSize >= 1 && newSize <= 99) {
    size = parseInt(newSize);
    redrawGrid();
  } else {
    alert("Please enter a valid size between 1 and 99.");
  }
});

changeColorBtn.addEventListener ("click", () => {
  color = getColor(color);
  rgb = false;
});


function redrawGrid() {
  grid.innerHTML = "";

  for(i = 0; i < size * size; i++){
    let gridElement = document.createElement("div");
    gridElement.style.width = 500 / size + "px";
    gridElement.style.height = 500 / size + "px";
    
    gridElement.classList.add("gridElement")
    grid.appendChild(gridElement);
  }
};

function getColor(newColor) {
  do {
    newColor = prompt("What color do you want to choose?");
  } while (!isValidColor(newColor));
  return newColor;
};

function isValidColor(color) {
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  
  return div.style.backgroundColor !== "";
};

function generateRandomColor() {
  let red = Math.floor(Math.random() * 256); 
  let green = Math.floor(Math.random() * 256); 
  let blue = Math.floor(Math.random() * 256); 

  let color = "rgb(" + red + ", " + green + ", " + blue + ")";
  
  return color;
};




grid.addEventListener ("mouseover", (e) => {
  if (isDrawing && e.target.classList.contains("gridElement")){
    e.target.style.backgroundColor = color;
  };
  if (isDrawing && e.target.classList.contains("gridElement") && rgb){
    e.target.style.backgroundColor = generateRandomColor();
  }
});



redrawGrid();