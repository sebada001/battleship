import { shipFactory } from "./ship.js";

const patrolBoat = shipFactory(2, 'Patrol Boat');


test('ship length', () => {
    expect(patrolBoat.length).toBe(2);
});

test('ship name', () => {
    expect(patrolBoat.name).toBe('Patrol Boat');
});

test('hit coordinate', () => {
    expect(patrolBoat.hit('F4')).toBe('F4 has been hit!');
});

test('not sink boat', () => {
    expect(patrolBoat.isSunk()).toBe(`Ship has been hit 1 times! Not yet sunk!`);
});



function hitter(){
    patrolBoat.hit('A1');
    return patrolBoat.isSunk();
}

test('sink boat 1', () => {
    expect(hitter()).toBe(`Ship has been hit 2 times! It sunk!`);
});

// test('sink boat 2', () => {
//     expect(patrolBoat.isSunk()).toBe('Ship is sunk!');
// });