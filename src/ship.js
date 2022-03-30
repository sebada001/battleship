
const shipFactory = (length, name) =>{
    let shotsReceived = 0;
    const hit = (coordinate) => {
        //mark coordinate as hit 
        //add to shotsReceived 
        // call isSunk
    };
    const isSunk = () => {
        //if shotsReceived === ship.length sunk
    };
    return{length, name, hit, isSunk}
};