import React, {Component,useState} from 'react';
import './App.css';

// Refer to HTC calculator
function RenderCalculator () {
  const [nowNum, updateNum] = useState([""]);
  const [result, updateResult] = useState();
  const [status, updateStatus] = useState(false);
  const turnOn_Off = () => { // Handle the turn on/off process
    if(!status){
      updateNum(["0"]);
      updateResult(0);
      updateStatus(true);
    }
    else{
      updateNum([""]);
      updateResult();
      updateStatus(false);
    }
  };
  let RenderPower = () => { // Change the power button
    if(!status){
      return <img src="power-off.png" style={{width: "30px",height: "30px"}}></img>;
    }
    else{
      return <img src="power-on.png" style={{width: "30px",height: "30px"}}></img>
    }
  }
  let SetResult = () => { //顯示目前預覽之運算結果
    let result = nowNum;
    return <div style={{textAlign: 'right',fontSize: '0.5cm',color: 'rgba(255,255,255,0.5)'}}>{result}</div>;
  }
  let ShowLatestResult = function(){ // 顯示最近一次運算結果在大數字上
    
  }
  let clear = () => {
    if(status){
      updateNum(["0"]);
      updateResult(0);
    }
  }
  let getNum = function(input){
    if(status){
      if(nowNum[0] === "0"){
        updateNum([input]);
      }
      else{
        updateNum([...nowNum,input]);
      }
    }
  }
  let getOperator = function(operator){
    
  }
  return (
    <div className="App">
      <div className="calculator__mainBody">
        <div className="calculator__displayWindow">
          <div style={{textAlign: 'right',fontSize: '1cm',color: 'rgba(255,255,255,0.8)'}}>{nowNum}</div>
          <SetResult />
        </div>
        
        <div className="row">
          <div className="offset-md-1 col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('+');}}>+</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button">-</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button">×</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button">÷</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={()=>{turnOn_Off()}}><RenderPower /></div>
          </div>
        </div>
        
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(7);}}>7</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() => {getNum(8);}}>8</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() => {getNum(9);}}>9</div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(4);}}>4</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(5);}}>5</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(6);}}>6</div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(1);}}>1</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(2);}}>2</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(3);}}>3</div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="offset-md-1-5 col-md-2">
            <div className="calculator__button">.</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={() => {getNum(0);}}>0</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={() => {clear()}}>C</div>
          </div>
          <div className="offset-md-1 col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('=');}}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCalculator;
