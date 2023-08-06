const gridSide = 650;
let blockSize = 16;
let blockSide = gridSide/blockSize;
let blockNum = blockSize * blockSize;

let clearMode = document.querySelector(".clear");
clearMode.addEventListener("click", ()=> {clearGrid(); makeGrid();})
let eraserMode = document.querySelector(".eraser");
eraserMode.addEventListener("click", ()=> {eraser()})

//grid size text
let gridSize = document.querySelector("#myRange");
let gridSizeOutput = document.querySelector(".number");
gridSizeOutput.textContent = gridSize.value + " x " + gridSize.value;

//Slider(gridSize changer) code for live change
function sliderOnInput() {
    gridSizeOutput.textContent = gridSize.value + " x " + gridSize.value;
    blockSize = gridSize.value;
    blockSide = gridSide / blockSize;
}

reload();

let colorPick = document.querySelector("#colorPicker");

function reload() {
    gridSize.oninput = function() {
        sliderOnInput();
        clearGrid();
        makeGrid();
    }
}

let gridDiv = document.querySelector(".grid");

makeGrid();

function makeGrid() {
    for(let i = 0; i < gridSize.value*gridSize.value; i++){
        block = document.createElement("div");
        block.classList.add("block-element");
        press();
        gridDiv.appendChild(block);
        block.style.border = "1px solid purple";
        block.style.backgroundColor = "white";
        block.style.width = blockSide+"px";
        gridDiv.style.gridTemplateColumns = `repeat(${blockSize}, 1fr)`;
        gridDiv.style.gridTemplateRows = `repeat(${blockSize}, 1fr)`;
        
    }
}

gridDiv.style.border = "1px solid black";
function clearGrid() {
    gridDiv.innerHTML = "";
}

function press() {
    block.addEventListener("mouseover", (block) => {if (block.target.classList.contains("block-element")){
    block.target.style.backgroundColor = colorPick.value};});
}

function eraser() {
    colorPick.value = "#FFFFFF";
}