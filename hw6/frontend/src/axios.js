import axios from 'axios'

const instance = axios.create
    ({baseURL: 'http://localhost:4000/api/guess'});
const startGame = async() => {
    try{
        const {data: {msg}} = await instance.post('/start');
        console.log("Game start!");
        return msg;
    }
    catch(error){
        return "HTTP 500. Server not responding. Try restarting yarn server."
    }
}
const guess = async (number) =>{
    try{
        try{
            const {data: {msg}} = await instance.get('/guess',{ params: {number}});
            return msg;
        }
        catch (error){
            console.log(error);
            if(error.response.status === 406){
                return ""+ number +" is not a valid number (1 - 100)";
            }
        }
    }
    catch(error){
        return "HTTP 500. Server not responding. Try restarting yarn server.";
    }
}
const restart = async () =>{
    try{
        const {data: {msg}} = await instance.post('/restart');
        return msg;
    }       
    catch(error){
        return "HTTP 500. Server not responding. Try restarting yarn server."
    }
}
export {startGame, guess, restart};
