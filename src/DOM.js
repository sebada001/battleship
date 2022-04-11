import { lengthObject, numberCoordinate, letterCoordinate } from "./utility";

const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');
const shipArea = document.querySelector('.ship-area');

let currentShip = "";
let alreadyPlacedShip = [];
let shipDirection = "horizontal";

function renderHumanBoard(boardObj){
    Object.keys(boardObj).forEach(coordKey =>{
        const cell = document.createElement('div');
        const coordinateTerrainArr = boardObj[coordKey].split(" ");
        coordinateTerrainArr.forEach(terr => cell.classList.add(terr));
        cell.setAttribute('data-coordinate', coordKey);
        cell.addEventListener('mouseover', (e)=> shipAreaSelection(e.target));
        cell.addEventListener('mouseleave', (e)=>shipAreaSelectionRemoval(e.target));
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
    //horizontal logic:
    for(let i=1; i<shipSize; i++){
        let newCoordFirst = numberCoord[0];
        let newCoordLast = Number(numberCoord[1]) + i;
        if((Number(numberCoord[1]) + i) <= 8){
            newCoordLast = Number(numberCoord[1]) + i;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==8 && shipSize ==2){ //for patrolBoat
            newCoordLast = Number(numberCoord[1]) - i;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==7 && shipSize ==3){ //for destroyer n submarine
            newCoordLast = Number(numberCoord[1]) - i+1;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==8 && shipSize ==3){ //for destroyer n submarine
            newCoordLast = Number(numberCoord[1]) - i;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==6 && shipSize ==4){ //for battleShip
            newCoordLast = Number(numberCoord[1]) - i+2;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==7 && shipSize ==4){ //for battleShip
            newCoordLast = Number(numberCoord[1]) - i+1;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==8 && shipSize ==4){ //for battleShip
            newCoordLast = Number(numberCoord[1]) - i;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==5 && shipSize ==5){ //for carrier
            newCoordLast = Number(numberCoord[1]) - i+3;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==6 && shipSize ==5){ //for carrier
            newCoordLast = Number(numberCoord[1]) - i+2;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==7 && shipSize ==5){ //for carrier
            newCoordLast = Number(numberCoord[1]) - i+1;
        }else if((Number(numberCoord[1]) + i) >= 8 && numberCoord[1]==8 && shipSize ==5){ //for carrier
            newCoordLast = Number(numberCoord[1]) - i;
        };
        let newCoord = newCoordFirst + newCoordLast;
        arrayOfCoords.push(newCoord);
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


export { renderHumanBoard, renderComputerBoard, renderHumanShips };
