import { lengthObject, numberCoordinate, letterCoordinate, checkOffBoard } from "./utility";
import { generateRandomCoordinate, indexCheck } from "./utility";

const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');
const shipArea = document.querySelector('.ship-area');
const toggle = document.querySelector('.toggle');

//current bug:

// computer placed ships can be placed on top of each other accidentally

let currentShip = "";
let alreadyPlacedShipHuman = [];
let alreadyPlacedShipAI = [];
let shipDirection = "horizontal";
let bool = false;
const clickEvent = new Event('click');

function pcBoardEvListeners(players){
    const pcBoard = [...computerSide.children];
    pcBoard.forEach(cell =>{
        cell.addEventListener('click', (e)=>attackAttempt(e.target, players));
    });
    computerSide.style.display = "none";
};

const randomShips = function(players){
    const ships = players.AI.myBoard.returnShips();
    for(let i = 0; i<ships.length; i++){
        let coord = generateRandomCoordinate();
        const cell = computerSide.querySelector(`[data-coordinate=${coord}]`);
        let length = ships[i].showLength();
        placeShipsRandomlyDOM(cell, length, ships[i].showName(), i, players);
        while(bool == false && alreadyPlacedShipAI.length<5){
            let newCoord = generateRandomCoordinate();
            let newCell = computerSide.querySelector(`[data-coordinate=${newCoord}]`);
            placeShipsRandomlyDOM(newCell, length, ships[i].showName(), i, players);
        };
        toggle.dispatchEvent(clickEvent);
    };
};

function placeShipsRandomlyDOM(cell, length, ship, index, players){
    bool = false;
    let array = selectSurroundingAreas(cell, length);
    if(checkForBoatsRandom(players, array)){
        insertShipRandom(array, index, players);
        alreadyPlacedShipAI.push(ship);
        bool = true;
    };
};

function checkForBoatsRandom(players, array){
    const checker = (coord) => players.AI.myBoard.returnBoard()[coord].length < 9;
    let checkVal = array.every(checker);
    return checkVal;
};

function insertShipRandom(array,index,players){
    players.AI.myBoard.placeShip(array, index)
};

function attackAttempt(cell, players){
        if(players.humanPlayer.showTurn()==true){
            players.AI.myBoard.receiveAttack(`${cell.dataset.coordinate}`);
            cell.className = players.AI.myBoard.returnBoard()[cell.dataset.coordinate];
            for(let i = 0; i<Object.keys(players.AI.myBoard.returnBoard()).length; i++){
                if(players.AI.myBoard.returnBoard()[Object.keys(players.AI.myBoard.returnBoard())[i]].includes('sunk')){
                    let newCell = computerSide.querySelector(`[data-coordinate=${Object.keys(players.AI.myBoard.returnBoard())[i]}]`);
                    newCell.classList.add('sunk');
                };
            };
            computerStrikesBack(players);
        };
};

function computerStrikesBack(players){
    setTimeout(() => {
        const move = players.AI.nextMove(players.AI.movePool, players.AI);
        players.humanPlayer.myBoard.receiveAttack(move);
        playerSide.querySelector(`[data-coordinate=${move}]`).className = players.humanPlayer.myBoard.returnBoard()[move];
        for(let i = 0; i<Object.keys(players.humanPlayer.myBoard.returnBoard()).length; i++){
            if(players.humanPlayer.myBoard.returnBoard()[Object.keys(players.humanPlayer.myBoard.returnBoard())[i]].includes('sunk')){
                let newCell = playerSide.querySelector(`[data-coordinate=${Object.keys(players.humanPlayer.myBoard.returnBoard())[i]}]`);
                newCell.classList.add('sunk');
            };
        };
    }, 300);
}

toggle.addEventListener('click', ()=>{
    toggleShipDirection();
});

function toggleShipDirection(){
    shipDirection = shipDirection == "vertical" ? shipDirection = "horizontal" : shipDirection = "vertical";
};


function renderHumanBoard(boardObj, humanPlayer){
    Object.keys(boardObj).forEach(coordKey =>{
        const cell = document.createElement('div');
        const coordinateTerrainArr = boardObj[coordKey].split(" ");
        coordinateTerrainArr.forEach(terr => cell.classList.add(terr));
        cell.setAttribute('data-coordinate', coordKey);
        cell.addEventListener('mouseover', (e)=> shipAreaSelection(e.target));
        cell.addEventListener('mouseleave', (e)=>shipAreaSelectionRemoval(e.target));
        cell.addEventListener('click', (e)=>placeShipDOM(e.target, humanPlayer));
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
        shipDiv.classList.add(ship.showName());
        shipDiv.textContent = ship.showName();
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
        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.add('selected');
    });
};

function removeSurroundingAreas(array){
    array.forEach(coord=> {
        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.remove('selected');
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
    }else if(alreadyPlacedShipHuman.includes(e.target.className)){
        return false
    };
    currentShip = e.target.className;
};

function placeShipDOM(cell, humanPlayer){
    const currentLength = lengthObject[currentShip];
    if(currentLength>1 && currentLength<6){
        let array = selectSurroundingAreas(cell, currentLength);
        if(!array.some(checkForBoats)){
            insertShip(array);
            shipAreaSelectionRemoval(cell);
            alreadyPlacedShipHuman.push(currentShip);
            humanPlayer.myBoard.placeShip(array, indexCheck[currentShip]);
            currentShip = "";
            if(alreadyPlacedShipHuman.length ==5){ //game starts
                computerSide.style.display = "flex";
            };
        };     
    };  
};

function checkForBoats(coord){
    return playerSide.querySelector(`[data-coordinate=${coord}]`).className.length > 14
};

function insertShip(array){
    array.forEach(coord=> {
        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.add(`${currentShip}`);
    });
};


export { renderHumanBoard, renderComputerBoard, renderHumanShips, pcBoardEvListeners, randomShips, alreadyPlacedShipHuman };
