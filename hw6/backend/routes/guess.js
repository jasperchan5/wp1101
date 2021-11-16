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
    const number = getNumber();
    const guessed = roughScale(req.query.number, 10);
    console.log(guessed);
    if(!guessed || guessed < 1 || guessed > 100){
        res.status(406).send({msg:'Not a legal number'});
    }
    else if(number === guessed){
        res.status(200).send({msg:'Equal'});
    }
    else if(guessed > number){
        res.status(200).send({msg:'Smaller, number is '+ number +''});
    }
    else if(guessed < number){
        res.status(200).send({msg:'Bigger, number is '+ number +''});
    }

})
router.post('/restart',(_, res) =>{
    genNumber();
    res.json({msg: 'The game has restarted.'})
})
export default router;