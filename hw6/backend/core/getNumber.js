var randomNumber;

const genNumber = () => {
    randomNumber = Math.floor(Math.random()*100);
}

const getNumber = () => {
    if(!randomNumber){
        genNumber();
    }
    return randomNumber;
}

export {genNumber, getNumber};