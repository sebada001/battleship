import { gameBoard } from "./gameboard.js";

/**
 * @jest-environment jsdom
 */

const board = gameBoard();

test('gameboard-basic 1', () => {
    expect(board.returnBoard()['A1']).toBe('water');
});

test('gameboard-basic 2', () => {
    expect(board.returnBoard()['H8']).toBe('water');
});

test('ships for board', () => {
    expect(board.returnShips()['4'].showName()).toBe('patrolBoat');
});

board.placeShip(['C2', 'C3'], 4);

test('place-ship 1', () =>{
    expect(board.returnBoard()['C2']).toBe('water patrolBoat');
});

test('place-ship 2', () =>{
    expect(board.returnBoard()['C3']).toBe('water patrolBoat');
});

test('taken spot ship', () =>{
    expect(board.placeShip(['C2', 'C3'], 4)).toBe('repeated spot');
});

function attackMock(){
    board.receiveAttack('C2');
    // 
    return board.returnBoard()['C2']
};

test('hitSpot on board', ()=>{
    expect(attackMock()).toBe('water patrolBoat hit');
});

test('receive attack', ()=>{
    expect(board.returnShips()[4].showHits()).toBe(1);
});

test('allSunk false', () =>{
    expect(board.allSunk()).toBe(false);
});

function attackMock2(){
    board.placeShip(['A1', 'A2', 'A3', 'A4', 'A5'], 0);
    board.placeShip(['B1', 'B2', 'B3', 'B4'], 1);
    board.placeShip(['D1', 'D2', 'D3'], 2);
    board.placeShip(['E1', 'E2', 'E3'], 3);
    board.receiveAttack('A1');
    board.receiveAttack('A2');
    board.receiveAttack('A3');
    board.receiveAttack('A4');
    board.receiveAttack('A5');
    board.receiveAttack('B1');
    board.receiveAttack('B2');
    board.receiveAttack('B3');
    board.receiveAttack('C3');
    board.receiveAttack('B4');
    board.receiveAttack('D1');
    board.receiveAttack('D2');
    board.receiveAttack('D3');
    board.receiveAttack('E1');
    board.receiveAttack('E2');
    board.receiveAttack('E3');
    return board.allSunk();
};

test('allSunk true', () =>{
    expect(attackMock2()).toBe(true);
});