import React,{useState} from 'react'
import './App.css';
import {guess, startGame, restart} from './axios'

function App() {
  const [hasStarted,setStart] = useState(false);
  const [hasWon,setHasWon] = useState(false);
  const [number,setNumber] = useState('');
  const [status,setStatus] = useState('');
  const handleGuess = async () =>{
    const response = await guess(number);
    if(response === 'Equal'){
      setHasWon(true);
      return;
    }
    else{
      console.log("Set status ",response);
      setStatus(response);
      setNumber('');
    }
    document.getElementsByClassName("guessGame__inputBar")[0].value = "";
  }
 
  const startMenu = 
  <>
    <div className="guessGame__title">Number guessing game</div>
    <button onClick={async ()=>{
      setStart(true);
      await startGame();
    }} className="guessGame__startButton">Start game!</button>
  </>

  const gameMode = 
    <>
    <div className="guessGame__title">Guess a number between 1 and 100</div>
      <div className="row">
        <input className="guessGame__inputBar" onChange={(e)=>setNumber(e.target.value)}></input>
        <button className="guessGame__guessButton"
                onClick={handleGuess}
                disabled={!number}>Guess</button>
      </div>
      <p className="guessGame__status">{status}</p>
    </>

  const winningMode = 
    <>
      <div className="guessGame__title">You won! The number was {number}.</div>
      <button className="guessGame__restartButton" onClick={async ()=>{
        await restart();
        setHasWon(false);
        setStart(true);
        setNumber('');
        setStatus('');
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
