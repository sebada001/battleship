import { lengthObject, numberCoordinate, letterCoordinate, checkOffBoard } from "./utility";

const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');
const shipArea = document.querySelector('.ship-area');
const toggle = document.querySelector('.toggle');

let currentShip = "";
let alreadyPlacedShip = [];
let shipDirection = "horizontal";

toggle.addEventListener('click', ()=>{
    toggleShipDirection();
});

function toggleShipDirection(){
    shipDirection = shipDirection == "vertical" ? shipDirection = "horizontal" : shipDirection = "vertical";
};

function renderHumanBoard(boardObj){
    Object.keys(boardObj).forEach(coordKey =>{
        const cell = document.createElement('div');
        const coordinateTerrainArr = boardObj[coordKey].split(" ");
        coordinateTerrainArr.forEach(terr => cell.classList.add(terr));
        cell.setAttribute('data-coordinate', coordKey);
        cell.addEventListener('mouseover', (e)=> shipAreaSelection(e.target));
        cell.addEventListener('mouseleave', (e)=>shipAreaSelectionRemoval(e.target));
        cell.addEventListener('click', (e)=>placeShipDOM(e.target));
        playerSide.appendChild(cell);
    });
};

function renderComputerBoard(obj){
    Object.keys(obj).forEach(key =>{
        const cell = document.createElement('div');
        const words = obj[key].split(" ");
        cell.classList.add(words[0]);
        cell.setAttribute('data-coordinate', key);
        computerSide.appendChild(cell);
    });
};

function renderHumanShips(arr){
    arr.forEach(ship =>{
        const shipDiv = document.createElement('div');
        shipDiv.classList.add(ship.name);
        shipDiv.textContent = ship.name;
        shipArea.appendChild(shipDiv);
    });
};

function shipAreaSelection(cell){
    const currentLength = lengthObject[currentShip];
    if(currentLength>1 && currentLength<6){
        let array = selectSurroundingAreas(cell, currentLength);
        drawSurroundingAreas(array);
    };  
};
function shipAreaSelectionRemoval(cell){
    const currentLength = lengthObject[currentShip];
    if(currentLength>1 && currentLength<6){
       let array = selectSurroundingAreas(cell, currentLength);
       removeSurroundingAreas(array);
    };  
};

function drawSurroundingAreas(array){
    array.forEach(coord=> {
        document.querySelector(`[data-coordinate=${coord}]`).classList.add('selected');
    });
};

function removeSurroundingAreas(array){
    array.forEach(coord=> {
        document.querySelector(`[data-coordinate=${coord}]`).classList.remove('selected');
    });
};

function selectSurroundingAreas(cell, shipSize){
    const numberCoord = numberCoordinate(cell);
    let arrayOfCoords = [];
    arrayOfCoords.push(numberCoord);
    if(shipDirection == "horizontal"){
        for(let i=1; i<shipSize; i++){
            let newCoordFirst = numberCoord[0];
            let newCoordLast = Number(numberCoord[1]) + i;
            if((Number(numberCoord[1]) + i) <= 8){
                newCoordLast = Number(numberCoord[1]) + i;
            }else if(Number(numberCoord[1] + i) > 8){
                newCoordLast = checkOffBoard(Number(numberCoord[1]), i, shipSize)
            };
            let newCoord = newCoordFirst + newCoordLast;
            arrayOfCoords.push(newCoord);
        };   
    }else if(shipDirection == "vertical"){
        for(let i=1; i<shipSize; i++){
            let newCoordFirst = Number(numberCoord[0]) + i;
            let newCoordLast = numberCoord[1];
            if((Number(numberCoord[0]) + i) <= 8){
                newCoordFirst = Number(numberCoord[0]) + i;
            }else if(Number(numberCoord[0] + i) > 8){
                newCoordFirst = checkOffBoard(Number(numberCoord[0]), i, shipSize)
            };
            let newCoord = newCoordFirst + newCoordLast;
            arrayOfCoords.push(newCoord);
        };  
    };
    const newArray = arrayOfCoords.map(each => letterCoordinate(each));
    return newArray
};

shipArea.addEventListener('click', (e)=>{shipChoose(e)});

function shipChoose(e){
    if(e.target.className == "ship-area"){
        return false
    }else if(alreadyPlacedShip.includes(e.target.className)){
        return false
    };
    currentShip = e.target.className;
};

function placeShipDOM(cell){
    const currentLength = lengthObject[currentShip];
    if(currentLength>1 && currentLength<6){
        let array = selectSurroundingAreas(cell, currentLength);
        if(!array.some(checkForBoats)){
            insertShip(array);
            shipAreaSelectionRemoval(cell);
            alreadyPlacedShip.push(currentShip);
            currentShip = "";
        };     
    };  
};
function checkForBoats(coord){
    return document.querySelector(`[data-coordinate=${coord}]`).className.length > 14
};

function insertShip(array){
    array.forEach(coord=> {
        document.querySelector(`[data-coordinate=${coord}]`).classList.add(`${currentShip}`);
    });
};


export { renderHumanBoard, renderComputerBoard, renderHumanShips };
