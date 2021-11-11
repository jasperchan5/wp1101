import React,{useState} from 'react'
import './App.css';
import { guess, startGame, restart} from './axios'

function App() {
  const [hasStarted,setStart] = useState(false);
  const [hasWon,setHasWon] = useState(false);
  const [number,setNumber] = useState('');
  const [status,setStatus] = useState('');

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
        <input className="guessGame__inputBar"></input>
        <button className="guessGame__guessButton"
                onClick={handleGuess}
                disabled={!number}>Guess</button>
      </div>
      <p>{status}</p>
    </>

  const winningMode = 
    <>
      <div className="guessGame__title">You won! The number was {number}.</div>
      <button className="guessGame__restartButton">Restart</button>
    </>
  
  const handleGuess = async () =>{
    const response = await processGuessByBackend(number);
    if(response === 'Equal') setHasWon(true);
    else{
      setStatus(response);
      setNumber('');
    }
  }
  const game = <div>{hasWon?winningMode:gameMode}</div>
  return (
    <div>
      {hasStarted?game:startMenu}
    </div>
  );
}

export default App;
