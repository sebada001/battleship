import { computerMoveAI, computerFactory, humanFactory } from "./players.js";

const humanObj = humanFactory('bread');
const computerObj = computerFactory();

function tester(p){
    return p.showTurn();
};

function tester2(p){
    p.turnSwitch(p);
    return p.myTurn;
};

test('switch turn 1', () => {
    expect(tester(humanObj)).toBe(true);
});

test('switch turn 2', () => {
    expect(tester2(humanObj)).toBe(false);
});

test('board of player 1', ()=>{
    expect(computerObj.myBoard.returnBoard()['A1']).toBe('water');
});

test('board of player 2', ()=>{
    expect(humanObj.myBoard.returnBoard()['A1']).toBe('water');
});

test('computer move pool', ()=>{
    expect(computerObj.movePool[0]).toBe('A1');
});

function tester3(){
    for(let i = 0; i<20; i++){
        computerObj.nextMove(computerObj.movePool, computerObj);
    };
    return computerObj.movePool.length;
}

test('computer move length', ()=>{
    expect(tester3()).toBe(44);
});

const obj={
    movePool: ['A1', 'A2', 'A3', 'A4', 'B1'],
};

function tester4(){
    for(let i = 0; i<4; i++){
        computerMoveAI(obj.movePool, obj);
    };
    return obj.movePool.length;
}

test('computer move AI', ()=>{
    expect(tester4()).toBe(1)
});