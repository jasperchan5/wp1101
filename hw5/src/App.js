import React, {Component,useState} from 'react';
import './App.css';

// Refer to HTC calculator
function RenderCalculator () {
  const [nowNum, updateNum] = useState([""]);
  const [status, updateStatus] = useState(false);

  const turnOn_Off = () => { // Handle the turn on/off process
    if(!status){
      updateNum(["0"]);
      updateStatus(true);
    }
    else{
      updateNum([""]);
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

  const ConvertArrayToNum = (arr) =>{ // 陣列轉數字
    let converted = 0;
    for(let i = 0; i<arr.length;i++){
      converted += arr[i]*Math.pow(10,arr.length-i-1);
      console.log("Have converted: ",converted);
    }
    return converted;
  }
  let ScientificNotation = (input) =>{ // 轉成科學記號
    
  }
  let ViewNownum = () =>{ // 顯示當前輸入數字及符號
    return <div style={{textAlign: 'right',fontSize: '1cm',color: 'rgba(255,255,255,0.8)'}}>{nowNum}</div>;
  }

  let undo = () =>{
    if(nowNum.length === 1){
      updateNum(["0"]);
    }
    else{
      updateNum(nowNum.slice(0,-1));
    }
  }

  let clear = () => {
    if(status){
      updateNum(["0"]);
    }
  }

  let getNum = function(input){
    if(status){
      if(nowNum[0] === "0"){
        updateNum([input]);
      }
      else{
        updateNum([...nowNum,input]);
        console.log(nowNum);
      }
    }
  }

  let getOperator = function(operator){
    if(status){
      if(operator === '='){
        console.log(nowNum);
  
        let everyNumArr = [];
        let everyOperator = [];

        // 掃描當前陣列
        let start = 0;
        for(let i=0; i<nowNum.length; i++){
          if(nowNum[i] === "+" || nowNum[i] === "-" || nowNum[i] === "×" || nowNum[i] === "÷"){         
            everyNumArr.push(nowNum.slice(start,i));
            everyOperator.push(nowNum[i]);
            start = i + 1;
          }
          else if(i === nowNum.length-1){
            everyNumArr.push(nowNum.slice(start));
          }
        }
        console.log(everyNumArr);
        // 把陣列轉整數
        let result = 0;
        let isFloat = false;
        for(let i=0; i<everyNumArr.length ;i++){
          let n = 0;
          
          for(let j=0;j<everyNumArr[i].length;j++){
            if(everyNumArr[i][j] === "."){
              isFloat = true;
            }
          }

          if(!isFloat){
            n = ConvertArrayToNum(everyNumArr[i]);
          }
          else{
            let tempStr = "";
            for(let j=0; j<everyNumArr[i].length; j++){
              tempStr += everyNumArr[i][j];
            }
            
            n = parseFloat(tempStr);
          }
          
          if(i === 0){
            result += n;
          }
          else if(i >= 1){
            if(everyOperator[i-1] === "+"){
              result += n;
            }
            else if(everyOperator[i-1] === "-"){
              result -= n;
            }
            else if(everyOperator[i-1] === "×"){
              result *= n;
            }
            else if(everyOperator[i-1] === "÷"){
              if(n !== 0){
                result /= n;
              }
              else{
                updateNum("Divided by 0.");
                return;
              }
            }
          }
        }
        if(status){
          updateNum([result]);
        }
      }
      else{
          updateNum([...nowNum,operator]);
      }
    }
  }

  return (
    <div className="App">
      <div className="calculator__mainBody">
      
        <div className="calculator__displayWindow">
        <div className="col-md-2">
            <div className="calculator__powerButton" onClick={()=>{turnOn_Off()}}><RenderPower /></div>
        </div>
          <ViewNownum />
        </div>
        
        <div className="row">
          <div className="offset-md-1 col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('+');}}>+</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('-');}}>-</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('×');}}>×</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={()=>{getOperator('÷');}}>÷</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={()=>{undo()}}><img src="delete0onn.png" style={{width: "30px",height: "30px",paddingTop: "15px"}}></img></div>
          </div>
        </div>
        
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(7);}}>7</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(8);}}>8</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{getNum(9);}}>9</div>
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
            <div className="calculator__button" onClick={()=>{getOperator('.');}}>.</div>
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
