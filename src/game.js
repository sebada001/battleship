import {computerFactory, humanFactory} from './players.js';

function gameMaker(playerName){
    const humanPlayer = humanFactory(playerName);
    const AI = computerFactory();
    placeShips(humanPlayer);
    placeShips(AI);
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