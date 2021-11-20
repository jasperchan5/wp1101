import axios from 'axios'

const instance = axios.create
    ({baseURL: 'http://localhost:4000/api/guess'});
const startGame = async() => {
    const {data: {msg}} = await instance.post('/start');
    console.log("Game start!");
    return msg;
}
const guess = async (number) =>{
    try{
        const {data: {msg}} = await instance.get('/guess',{ params: {number}});
        return msg;
    }
    catch (error){
        console.log(error);
        if(error.response.status === 406){
            return ""+ number +" is not a valid number";
        }
        else{
            return "Server not responding"
        }
    }
}
const restart = async () =>{
    const {data: {msg}} = await instance.post('/restart');
    return msg;
}
export {startGame, guess, restart};
