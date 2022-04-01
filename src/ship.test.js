import { shipFactory } from "./ship.js";

const patrolBoat = shipFactory(2, 'patrolBoat');
const submarine = shipFactory(3, 'submarine');

test('ship length', () => {
    expect(patrolBoat.length).toBe(2);
});

test('ship name', () => {
    expect(patrolBoat.name).toBe('patrolBoat');
});

function checkHits(){
    const initialVal = patrolBoat.showHits();
    patrolBoat.hit();
    const secondVal = patrolBoat.showHits();
    patrolBoat.hit();
    const thirdVal = patrolBoat.showHits();
    return `${initialVal} ${secondVal} ${thirdVal}`
};

test('check hits', () => {
    expect(checkHits()).toBe('0 1 2');
});

test('not sink boat', () => {
    expect(submarine.showSunk()).toBe(false);
});

function sunkChecker(){
    const before = submarine.showSunk();
    submarine.hit();
    submarine.hit();
    submarine.hit();
    const after = submarine.showSunk();
    return `${before} ${after}`
};

test('sink boat 1', () => {
    expect(sunkChecker()).toBe('false true');
});
