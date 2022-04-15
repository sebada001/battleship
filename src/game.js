import {computerFactory, humanFactory} from './players.js';
import{pcBoardEvListeners, renderComputerBoard, renderHumanBoard, renderHumanShips, randomShips} from './DOM.js';

function gameMaker(playerName){
    const humanPlayer = humanFactory(playerName);
    const AI = computerFactory();
    renderHumanBoard(humanPlayer.myBoard.returnBoard());
    renderComputerBoard(AI.myBoard.returnBoard());
    renderHumanShips(humanPlayer.myBoard.returnShips());
    return {humanPlayer, AI};
};

function startGame(playerName){
    const players = gameMaker(playerName);
    pcBoardEvListeners(players);
    randomShips(players);
};


startGame('player name')

export{gameMaker}