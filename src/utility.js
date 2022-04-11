const lengthObject = {
    'carrier': 5,
    'battleship': 4,
    'destroyer': 3,
    'submarine': 3,
    'patrolBoat': 2,
};

const letterToNumber = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
};

const numberToLetter = {
    '1': 'A',
    '2': 'B',
    '3': 'C',
    '4': 'D',
    '5': 'E',
    '6': 'F',
    '7': 'G',
    '8': 'H',
};

const numberCoordinate = function(cell){
    let first = letterToNumber[cell.dataset.coordinate.substring(0,1)];
    let second = cell.dataset.coordinate.substring(1,2);
    return first+second;
}

const letterCoordinate = function(numberCoord){
    let first = numberToLetter[numberCoord.substring(0,1)];
    let second = numberCoord.substring(1,2);
    return first+second;
};

export{lengthObject, numberCoordinate, letterCoordinate}