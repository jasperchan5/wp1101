var randomNumber;

const genNumber = () => {
    randomNumber = Math.floor(Math.random()*100);
}

const getNumber = () => {
    return randomNumber;
}

export {genNumber, getNumber};