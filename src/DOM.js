const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');

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


export { renderHumanBoard, renderComputerBoard };
