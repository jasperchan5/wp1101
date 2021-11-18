import express from 'express'
import { genNumber, getNumber } from '../core/getNumber.js';
const router = express.Router();
function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}
router.post('/start',(_, res) =>{
    genNumber();
    res.json({msg: 'The game has started.'})
})
router.get('/guess',(req,res) =>{
    // Check if there is a string in guess
    const number = getNumber();
    const guessed = roughScale(req.query.number, 10);
    var hasString = false;
    for(let i=0; i<toString(guessed).length; i++){
        if(parseInt(toString(guessed)[i]) === NaN){
            hasString = true;
            break;
        }
    }
    let numArr = Array(2), guessArr = Array(2);
    if(number < 10){
        numArr[0] = number;
    }
    else{
        numArr[0] = Math.floor(number/10);
        numArr[1] = number%10;
    }

    if(guessed > 0 && guessed < 10){
        guessArr[0] = guessed;
    }
    else if(guessed >= 10 && guessed < 100){
        guessArr[0] = Math.floor(guessed/10);
        guessArr[1] = guessed%10;
    }

    // // AB game
    let A_cnt = 0, B_cnt = 0;
    if(!guessed || guessed < 1 || guessed > 100 || hasString === true){
        res.status(406).send({msg:'Not a legal number'});
    }
    else if(1 <= guessed && guessed < 10){
        if(number === guessed){
            res.status(200).send({msg:'Equal'});
        }
        else if((guessArr[0] === numArr[1]) && number !== guessed){
            A_cnt++;
        }
        else if((guessArr[0] === numArr[0]) && number !== guessed){
            B_cnt++;
        }
        res.status(200).send({msg: ''+ A_cnt +'A'+ B_cnt +'B'});
    }
    else if(10 <= guessed && guessed <= 100){
        if(number === guessed){
            res.status(200).send({msg:'Equal'});
        }
        else if((guessArr[0] === numArr[0] || guessArr[1] === numArr[1]) && number !== guessed){
            A_cnt++;
        }
        else if((guessArr[1] === numArr[0] || guessArr[0] === numArr[1]) && number !== guessed){
            B_cnt++;
            if((guessArr[1] === numArr[0] && guessArr[0] === numArr[1])){
                B_cnt++;
            }
        }
        res.status(200).send({msg: ''+ A_cnt +'A'+ B_cnt +'B'});
    }
    

    // Original code
    // if(!guessed || guessed < 1 || guessed > 100){
    //     res.status(406).send({msg:'Not a legal number'});
    // }
    // else if(number === guessed){
    //     res.status(200).send({msg:'Equal'});
    // }
    // else if(guessed > number){
    //     res.status(200).send({msg:'Smaller'});
    // }
    // else if(guessed < number){
    //     res.status(200).send({msg:'Bigger'});
    // }

})
router.post('/restart',(_, res) =>{
    genNumber();
    res.json({msg: 'The game has restarted.'})
})
export default router;