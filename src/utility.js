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

const checkOffBoard =function(num, i, shipSize){
    if((num + i) >= 8 && num==8 && shipSize ==2){ //for patrolBoat
        return num - i;
    }else if((num + i) >= 8 && num==7 && shipSize ==3){ //for destroyer n submarine
        return num - i+1;
    }else if((num + i) >= 8 && num==8 && shipSize ==3){ //for destroyer n submarine
        return num - i;
    }else if((num + i) >= 8 && num==6 && shipSize ==4){ //for battleShip
        return num - i+2;
    }else if((num + i) >= 8 && num==7 && shipSize ==4){ //for battleShip
        return num - i+1;
    }else if((num + i) >= 8 && num==8 && shipSize ==4){ //for battleShip
        return num - i;
    }else if((num + i) >= 8 && num==5 && shipSize ==5){ //for carrier
        return num - i+3;
    }else if((num + i) >= 8 && num==6 && shipSize ==5){ //for carrier
        return num - i+2;
    }else if((num + i) >= 8 && num==7 && shipSize ==5){ //for carrier
        return num - i+1;
    }else if((num + i) >= 8 && num==8 && shipSize ==5){ //for carrier
        return num - i;
    };
};

const generateRandomCoordinate = function(){
    const number1 = Math.floor(Math.random()*(8-1+1)+1);
    const number2 = Math.floor(Math.random()*(8-1+1)+1);
    const letter = numberToLetter[number1];
    return letter + number2.toString()
}

export{lengthObject, numberCoordinate, letterCoordinate, checkOffBoard, generateRandomCoordinate}