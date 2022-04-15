import { gameBoard } from "./gameboard.js";

const humanFactory = (name) =>{
    let myTurn = true;
    let myBoard = gameBoard();
    // const turnSwitch = (player) => myTurnSwitch(player);
    const showTurn = () => myTurn;
    const myTurnSwitch = (player) =>player.myTurn = player.myTurn == false ? player.myTurn = true : player.myTurn = false;
    return {myBoard, myTurnSwitch, name, showTurn}
};

const computerFactory = () =>{
    let myTurn = false;
    let myBoard = gameBoard();
    let movePool = getMovePool();
    // const turnSwitch = (player)=> myTurnSwitch(player);
    const nextMove = (movePool, computerObj)=> computerMoveAI(movePool, computerObj);
    const showTurn = () => myTurn;
    return { nextMove, showTurn, myBoard, movePool }
};

function computerMoveAI(movePool, self){
    let moveNumber = getMove(movePool);
    let move = movePool[moveNumber];
    self['movePool'].splice(moveNumber, 1);
    return move;
};

function getMovePool(){
    const movePool = ['A1','A2','A3','A4','A5','A6','A7','A8',
                      'B1','B2','B3','B4','B5','B6','B7','B8',
                      'C1','C2','C3','C4','C5','C6','C7','C8',
                      'D1','D2','D3','D4','D5','D6','D7','D8',
                      'E1','E2','E3','E4','E5','E6','E7','E8',
                      'F1','F2','F3','F4','F5','F6','F7','F8',
                      'G1','G2','G3','G4','G5','G6','G7','G8',
                      'H1','H2','H3','H4','H5','H6','H7','H8']
    return movePool;
};

function getMove(movePool){
    let moveNumber = getRandomNumberBetween(0, movePool.length-1);
    return moveNumber;  
};

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};



export {computerFactory, computerMoveAI, humanFactory}
