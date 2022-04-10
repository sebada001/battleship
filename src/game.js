import {computerFactory, humanFactory} from './players.js';
import{renderComputerBoard, renderHumanBoard} from './DOM.js';

function gameMaker(playerName){
    const humanPlayer = humanFactory(playerName);
    const AI = computerFactory();
    placeShips(humanPlayer);
    placeShips(AI);
    // console.log(humanPlayer.myBoard.returnBoard())
    // console.log(AI.myBoard.returnBoard())
    renderHumanBoard(humanPlayer.myBoard.returnBoard());
    renderComputerBoard(AI.myBoard.returnBoard());
    return {humanPlayer, AI};
};

function placeShips(player){
    player.myBoard.placeShip(['A1', 'A2', 'A3', 'A4', 'A5'], 0);
    player.myBoard.placeShip(['C1', 'C2', 'C3', 'C4'], 1);
    player.myBoard.placeShip(['F5', 'G5', 'H5'], 2);
    player.myBoard.placeShip(['H1', 'H2', 'H3'], 3);
    player.myBoard.placeShip(['C7', 'C8'], 4);
};

export{gameMaker}