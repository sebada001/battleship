
const shipFactory = (length, name) =>{
    let shotsReceived = 0;
    const hit = (coordinate) => {
        mockBoard.coordinate = true;
        shotsReceived ++;
        isSunk();
        return `${coordinate} has been hit!`
    };
    const isSunk = () => {
        if(shotsReceived >= length){
            return `Ship has been hit ${shotsReceived} times! It sunk!`
        }
        else{
            return `Ship has been hit ${shotsReceived} times! Not yet sunk!`
        }
    };
    return{length, name, hit, isSunk}
};


const mockBoard = 
{ 'A1': false, 'A2': false, 'A3': false, 'A4': false, 'A5': false, 'A6': false, 'A7': false, 'A8': false,
  'B1': false, 'B2': false, 'B3': false, 'B4': false, 'B5': false, 'B6': false, 'B7': false, 'B8': false,
  'C1': false, 'C2': false, 'C3': false, 'C4': false, 'C5': false, 'C6': false, 'C7': false, 'C8': false, 
  'D1': false, 'D2': false, 'D3': false, 'D4': false, 'D5': false, 'D6': false, 'D7': false, 'D8': false, 
  'E1': false, 'E2': false, 'E3': false, 'E4': false, 'E5': false, 'E6': false, 'E7': false, 'E8': false, 
  'F1': false, 'F2': false, 'F3': false, 'F4': false, 'F5': false, 'F6': false, 'F7': false, 'F8': false, 
  'G1': false, 'G2': false, 'G3': false, 'G4': false, 'G5': false, 'G6': false, 'G7': false, 'G8': false, 
  'H1': false, 'H2': false, 'H3': false, 'H4': false, 'H5': false, 'H6': false, 'H7': false, 'H8': false,  
};


export { shipFactory, mockBoard }