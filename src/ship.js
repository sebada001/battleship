
const shipFactory = (length, name) =>{
    let shotsReceived = 0;
    let sunkStatus = false;
    const showHits = () =>{
        return shotsReceived;
    };
    const hit = () => {
        shotsReceived ++;
        isSunk();
    };
    const showSunk = () =>{
        return sunkStatus;
    };
    const isSunk = () => {
        if(shotsReceived == length){
            sunkStatus = true;
        };
    };
    const showName = () =>{
        return name;
    };
    const showLength = () =>{
        return length;
    };

    return{showLength, showName, hit, isSunk, showHits, showSunk}

    //set length and name as return functions to keep those values private, affects players.js
};

export { shipFactory }

