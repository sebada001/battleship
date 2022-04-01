
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
    return{length, name, hit, isSunk, showHits, showSunk}
};

export { shipFactory }