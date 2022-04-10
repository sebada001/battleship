const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');
const shipArea = document.querySelector('.ship-area');

function renderHumanBoard(obj){
    Object.keys(obj).forEach(key =>{
        const cell = document.createElement('div');
        const words = obj[key].split(" ");
        words.forEach(word => cell.classList.add(word));
        cell.setAttribute('data-coordinate', key);
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


export { renderHumanBoard, renderComputerBoard, renderHumanShips };
