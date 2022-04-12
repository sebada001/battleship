import {computerFactory, humanFactory} from './players.js';
import{renderComputerBoard, renderHumanBoard, renderHumanShips} from './DOM.js';

function gameMaker(playerName){
    const humanPlayer = humanFactory(playerName);
    const AI = computerFactory();
    renderHumanBoard(humanPlayer.myBoard.returnBoard());
    renderComputerBoard(AI.myBoard.returnBoard());
    renderHumanShips(humanPlayer.myBoard.returnShips());
    return {humanPlayer, AI};
};

const players = gameMaker('pepe')


export{gameMaker}