import React,{useState} from 'react'
import './App.css';
import {guess, startGame, restart} from './axios'

function App() {
  const [hasStarted,setStart] = useState(false);
  const [hasWon,setHasWon] = useState(false);
  const [number,setNumber] = useState('');
  const [comp_number,setComNumber] = useState('');
  const [status,setStatus] = useState('');
  const [comp_status,setComStatus] = useState('');
  const [client,setClient] = useState(true);
  const [compGuessArr] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [foundCorrectNum,setFoundCorrect] = useState(false);
  const [correctNum,setCorrectNum] = useState(-1);
  const [correctDigit,setCorrectDigit] = useState('');
  const [guessButton,setGuessButton] = useState(false);

  const setCompGuessArr = (number,status) => {
    let ten = Math.floor(number/10), one = number%10;
    if(status === '1A0B'){
      if(compGuessArr[ten] === 1){ // Already A, so we can confirm it is A
        setFoundCorrect(true);
        setCorrectNum(ten);
        setCorrectDigit('ten');
      }
      else if(compGuessArr[one] === 1){ // Already A, so we can confirm it is A
        setFoundCorrect(true);
        setCorrectNum(one);
        setCorrectDigit('one');
      }
      else{
        compGuessArr[ten] += 1;
        compGuessArr[one] += 1;
      }
      console.log(compGuessArr);
    }
  }
  const handleGuess = async () => {
    const response = await guess(number);
    if(response === 'Equal'){
      setHasWon(true);
      return;
    }
    else{
      setStatus(response);
      // Let the computer guess
      // First set the client to false
      if(client){
        setClient(false);
        // Guess a number according to current status
        let randNum = 0;
        if(comp_status === '0A0B' || comp_status === ''){
         randNum = Math.floor(Math.random()*100); // Keep random guessing
        }
        else if(comp_status === '0A2B'){
          randNum = comp_number%10*10 + Math.floor(comp_number/10); // Swap two digits
        }
        else if(comp_status === '1A0B'){
          if(!foundCorrectNum){
            setCompGuessArr(comp_number,comp_status);
          }
          console.log("Correct num: ",correctNum);
          // Choose a digit as the correct one
          if(correctNum === -1){
            let randSelector = Math.random();
            if(randSelector <= 0.5){ // Pick 10 digit
              randNum = Math.floor(comp_number/10)*10 + Math.floor(Math.random()*10);
            }
            else{ // Pick 1 digit
              randNum = comp_number%10 + Math.floor(Math.random()*10)*10;
            }
          }
          else{
            if(correctDigit === 'ten'){
              randNum = correctNum*10 + Math.floor(Math.random()*10);
            }
            else if(correctDigit === 'one'){
              randNum = correctNum + Math.floor(Math.random()*10)*10;
            }
            console.log("RandNum after determining the correct num: ",randNum);
          }
        }
        else if(comp_status === '0A1B'){
          // Choose a digit and add it into new guess
          let randSelector = Math.random();
          if(randSelector <= 0.25){ // Pick 10 digit, add to 10 digit
            randNum = Math.floor(comp_number/10)*10 + Math.floor(Math.random()*10);
          }
          else if(randSelector > 0.25 && randSelector <= 0.5){ // Pick 10 digit, add to 1 digit
            randNum = Math.floor(comp_number/10) + Math.floor(Math.random()*10)*10;
          }
          else if(randSelector > 0.5 && randSelector <= 0.75){ // Pick 1 digit, add to 10 digit
            randNum = Math.floor(comp_number%10)*10 + Math.floor(Math.random()*10);
          }
          else{ // Pick 1 digit, add to 1 digit
            randNum = comp_number%10 + Math.floor(Math.random()*10)*10;
          }
        }
        else{
          randNum = Math.floor(Math.random()*100); // Keep random guessing
        }
        // console.log(compGuessArr);
        setComNumber(randNum);
        const comp_response = await guess(randNum);
        if(comp_response === 'Equal'){
          setHasWon(true);
          return;
        }
        else{
          setComStatus(comp_response);
          setClient(true);
        }
      }
    }
    document.getElementsByClassName("guessGame__inputBar")[0].value = '';
    setGuessButton(false);
  }
 
  const startMenu = 
  <>
    <div className="guessGame__text title">Number guessing game</div>
    <div className="guessGame__text rule">規則：</div>
    <div className="guessGame__text rule">此遊戲經過改良，人與電腦會同時競爭猜同一個數字。</div>
    <div className="guessGame__text rule">當你輸入數字並按下guess之後，電腦也會猜一個數字。</div>
    <div className="guessGame__text rule">而status也不再是Bigger或Smaller，而是XAXB。</div>
    <div className="guessGame__text rule">A表示數字跟位置都正確，B表示僅數字正確，位置不正確。</div>
    <button onClick={async ()=>{
      setStart(true);
      await startGame();
    }} className="guessGame__startButton">Start game!</button>
  </>

  const gameMode = 
    <>
    <div className="guessGame__text title">Guess a number between 1 and 100</div>
      <div className="row">
        <input className="guessGame__inputBar" onChange={(e)=>{setNumber(e.target.value);setGuessButton(true)}}></input>
        <button className="guessGame__guessButton"
                onClick = {handleGuess}
                disabled={!guessButton}>Guess</button>
      </div>
      <p className="guessGame__text status">You guess: {number}</p>
      <p className="guessGame__text status">Your status: {status}</p>
      <p className="guessGame__text status">Computer guess: {comp_number}</p>
      <p className="guessGame__text status">Computer status: {comp_status}</p>
    </>

  const winningMode = 
    <>
      <div className="guessGame__text title">{client?"You won! The number was "+ number+ ".":"The computer won! The number was "+ comp_number +"."}</div>
      <button className="guessGame__restartButton" onClick={async ()=>{
        await restart();
        setHasWon(false);
        setStart(true);
        setNumber('');
        setComNumber('');
        setStatus('');
        setComStatus('');
        setGuessButton(false);
        setClient(true);
      }}>Restart</button>
    </>
  
  const game = <div>{hasWon?winningMode:gameMode}</div>
  return (
    <div>
      {hasStarted?game:startMenu}
    </div>
  );
}

export default App;
