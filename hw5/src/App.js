import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result:0, // 顯示在螢幕上的計算結果
      tempDisplay:0, // 運算過程中顯示在螢幕上的數字
      calcArr:Array(0), // 儲存所有輸入的數字、符號
      numArr:Array(0), // 儲存目前運算結果
      displayArr:Array(0) // 把calcArr裡的各字元組合並展示
    };
  }
  getNum = function(num){
    this.state.calcArr.push(num);
  }
  getOperator = function(operator){
    this.state.calcArr.push(operator);
  }
  calculate = function(){
    console.log(this.state.calcArr[0]);
    if(this.state.calcArr[0] === '+'){
      this.setState({tempDisplay:0});
      document.getElementById("displayNum").innerText = this.state.tempDisplay;
      this.state.displayArr.pop();
      this.state.calcArr.pop();
    }
    else if(this.state.calcArr[0] === '-'){
      this.state.calcArr.pop();
    }
    else if(this.state.calcArr[0] === '×'){
      this.state.calcArr.pop();
    }
    else if(this.state.calcArr[0] === '÷'){
      this.state.calcArr.pop();
    }
    else if(this.state.calcArr[0] === '='){
      console.log("Equal");
      this.setState({result:100111101});
      this.state.calcArr.pop();
    }
    else{ // 更新當前螢幕顯示數字
      this.setState({tempDisplay:0});
      this.state.displayArr.push(this.state.calcArr[0]);
      this.state.tempDisplay = parseInt(this.state.displayArr.join(''));
      document.getElementById("displayNum").innerText = this.state.tempDisplay;
      this.state.calcArr.pop();
    }
  }
  render() {
    return (
      <div className="App">
        <div className="calculator__mainBody">
          <div className="calculator__displayWindow">
            <div id="displayNum" style={{textAlign: 'right',fontSize: '1cm',color: 'rgba(255,255,255,0.8)'}}>{this.state.result}</div>
          </div>
          
          <div className="row">
            <div className="offset-md-2 col-md-2">
              <div className="calculator__button" onClick={()=>{this.getOperator('+');this.calculate();}}>+</div>
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
              <div className="calculator__button" onClick={() =>{this.getNum(7);this.calculate();}}>7</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() => {this.getNum(8);this.calculate();}}>8</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() => {this.getNum(9);this.calculate();}}>9</div>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1-5 col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(4);this.calculate();}}>4</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(5);this.calculate();}}>5</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(6);this.calculate();}}>6</div>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-1-5 col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(1);this.calculate();}}>1</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(2);this.calculate();}}>2</div>
            </div>
            <div className="col-md-3">
              <div className="calculator__button" onClick={() =>{this.getNum(3);this.calculate();}}>3</div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="offset-md-1-5 col-md-2">
              <div className="calculator__button">.</div>
            </div>
            <div className="col-md-2">
              <div className="calculator__button" onClick={() => {this.getNum(0);this.calculate();}}>0</div>
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
}

export default App;
