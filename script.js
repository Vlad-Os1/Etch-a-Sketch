
let grid = document.querySelector("#sketch-container");
let sizeBtn = document.querySelector("#size-btn");
let resetBtn = document.querySelector("#reset-btn");

let size = 16;

resetBtn.addEventListener ("click", (e) => {
  redrawGrid();
})


sizeBtn.addEventListener ("click", (e) => {
  let newSize = prompt("Choose your size between 1 and 99");
  if (!isNaN(newSize) && newSize >= 1 && newSize <= 99) {
    size = parseInt(newSize);
    redrawGrid();
  } else {
    alert("Please enter a valid size between 1 and 99.");
  }
})


function redrawGrid() {
  grid.innerHTML = "";

  for(i = 0; i < size * size; i++){
    let gridElement = document.createElement("div");
    gridElement.style.width = 500 / size + "px";
    gridElement.style.height = 500 / size + "px";
    
    gridElement.classList.add("gridElement")
    grid.appendChild(gridElement);
  }
}


grid.addEventListener ("mouseover", (e) => {
  if (e.target.classList.contains("gridElement")){
    if (size < 10){  //deletes hover on too small grids 
      e.target.classList.add("noHover");
      e.target.style.backgroundColor = "grey";  
    } else { 
      e.target.style.backgroundColor = "grey";
    }
  }
})






redrawGrid();