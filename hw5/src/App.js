import React, { Component } from 'react';
import './App.css';

function App () {
  const [nowNum, updateNum] = useState(0);
  getNum = function(inputNum){
    
  }
  getOperator = function(operator){
    
  }
  show = function(){ // 顯示目前數字
    
  }
  return (
    <div className="App">
      <div className="calculator__mainBody">
        <div className="calculator__displayWindow">
          <div id="displayNum" style={{textAlign: 'right',fontSize: '1cm',color: 'rgba(255,255,255,0.8)'}}>{nowNum}</div>
        </div>
        
        <div className="row">
          <div className="offset-md-2 col-md-2">
            <div className="calculator__button" onClick={()=>{this.getOperator('+');}}>+</div>
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
        </div>
        
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(7);}}>7</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() => {this.getNum(8);}}>8</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() => {this.getNum(9);}}>9</div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(4);}}>4</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(5);}}>5</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(6);}}>6</div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1-5 col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(1);}}>1</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(2);}}>2</div>
          </div>
          <div className="col-md-3">
            <div className="calculator__button" onClick={() =>{this.getNum(3);}}>3</div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="offset-md-1-5 col-md-2">
            <div className="calculator__button">.</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={() => {this.getNum(0);}}>0</div>
          </div>
          <div className="col-md-2">
            <div className="calculator__button" onClick={() => {
                this.state = {
                  result:0, // 顯示在螢幕上的計算結果
                  tempDisplay:0, // 運算過程中顯示在螢幕上的數字
                  calcArr:Array(0), // 儲存所有輸入的數字、符號
                  numArr:Array(0), // 儲存目前運算結果
                  displayArr:Array(0) // 把calcArr裡的各字元組合並展示
                }
                document.getElementById("displayNum").innerText = this.state.result;
            }}>C</div>
          </div>
          <div className="offset-md-1 col-md-2">
            <div className="calculator__button" onClick={()=>{this.getOperator('=');this.calculate();}}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
