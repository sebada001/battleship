import { shipFactory } from "./ship.js";

const gameBoard = () =>{
    const boardObj = 
    {   'A1': "water", 'A2': "water", 'A3': "water", 'A4': "water", 'A5': "water", 'A6': "water", 'A7': "water", 'A8': "water",
        'B1': "water", 'B2': "water", 'B3': "water", 'B4': "water", 'B5': "water", 'B6': "water", 'B7': "water", 'B8': "water",
        'C1': "water", 'C2': "water", 'C3': "water", 'C4': "water", 'C5': "water", 'C6': "water", 'C7': "water", 'C8': "water", 
        'D1': "water", 'D2': "water", 'D3': "water", 'D4': "water", 'D5': "water", 'D6': "water", 'D7': "water", 'D8': "water", 
        'E1': "water", 'E2': "water", 'E3': "water", 'E4': "water", 'E5': "water", 'E6': "water", 'E7': "water", 'E8': "water", 
        'F1': "water", 'F2': "water", 'F3': "water", 'F4': "water", 'F5': "water", 'F6': "water", 'F7': "water", 'F8': "water", 
        'G1': "water", 'G2': "water", 'G3': "water", 'G4': "water", 'G5': "water", 'G6': "water", 'G7': "water", 'G8': "water", 
        'H1': "water", 'H2': "water", 'H3': "water", 'H4': "water", 'H5': "water", 'H6': "water", 'H7': "water", 'H8': "water",  
    };

    const carrier = shipFactory(5, 'carrier');
    const battleship = shipFactory(4, 'battleship');
    const destroyer = shipFactory(3, 'destroyer');
    const submarine = shipFactory(3, 'submarine');
    const patrolBoat = shipFactory(2, 'patrolBoat');

    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

    const placeShip = (coordinates, shipIndex) =>{
        let warning = '';
        coordinates.forEach(coord => {
            if(boardObj[coord] == 'water') {
                boardObj[coord] += (' ' +ships[shipIndex].name);
            }else{
                warning = 'repeated spot';
            }
        });
        return warning
    };
    function shipHitMessage(coordinate, shipName){
        return `${shipName} has been hit at ${coordinate}!`
    };

    const receiveAttack = (coordinate) =>{
        if(boardObj[coordinate] != 'water' && !boardObj[coordinate].includes('hit')){
            ships.forEach(ship => {
                if(boardObj[coordinate].includes(ship.name)){
                    ship.hit();
                    hitSpot(coordinate, 'boat');
                    if(ship.showSunk()){
                        for(const property in boardObj){
                            if(boardObj[property].includes(ship.name)){
                                boardObj[property] += ' sunk';
                            };
                        };
                    };
                };
            });
        }else if(!boardObj[coordinate].includes('hit')){
            hitSpot(coordinate, 'water');
        };
    };

    const hitSpot = (coordinate, type) =>{
            if(type == 'boat'){
                boardObj[coordinate] += ' hit';
            }else if(type == 'water'){
                boardObj[coordinate] += ' hit miss';
            }
            
    };

    const returnBoard = () =>{
        return boardObj;
    };

    const returnShips = () =>{
        return ships;
    };

    const allSunk = () =>{
        const arraySunkStatus = (eachShip) => eachShip.showSunk();
        return ships.every(arraySunkStatus);
    };

    return { placeShip, receiveAttack, returnBoard, returnShips, allSunk }

};

export { gameBoard };

