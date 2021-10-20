import './App.css';
import './main.js';
import './x.png';
import clearCompleted from './main.js';
function App() {
  return (
    <div className="App">
      <div id="root" className="todo-app__root">
        <header className="App-header">
          <h1 className="todo-app__title">todos</h1>
        </header>
        <section className="todo-app__main">
          <input className="todo-app__input"></input>
          <ul className="todo-app__list" id="todo-list"></ul>
        </section>
        <footer className="todo-app__footer" id="todo-footer" style={{display: 'none'}}> 
          <div className="todo-app__total">-999 Left</div>
          <ul className="todo-app__view-buttons">
            <button style={{display: 'flex'}} onClick={function(){filters(0);}}>All</button>
            <button style={{display: 'flex'}} onClick={function(){filters(1);}}>Active</button>
            <button style={{display: 'flex'}} onClick={function(){filters(2);}}>Completed</button>
          </ul>
          <div className="todo-app__clean" style={{visibility: 'hidden'}} onClick={function(){clearCompleted();}}>
            <button>Clear completed</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
var buttonPushed = [false,false,false];
var filters = function(i){
    let button = document.getElementsByTagName("button")[i];
    button.style = "display: flex;";
    if(i === 0){
        button.onclick = function(){
            if(buttonPushed[0] === false){
                buttonPushed[0] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[1] = false;
                buttonPushed[2] = false;
                document.getElementsByTagName("button")[1].style = "display: flex;";
                document.getElementsByTagName("button")[2].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                for(let j = 0; j < items.length; j++){
                    items[j].style.display = "flex";
                }
            }
            else{
                buttonPushed[0] = false;
                this.style = "display: flex;";
            }
        };
    }
    else if(i === 1){
        button.onclick = function(){
            if(buttonPushed[1] === false){
                buttonPushed[1] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[0] = false;
                buttonPushed[2] = false;
                document.getElementsByTagName("button")[0].style = "display: flex;";
                document.getElementsByTagName("button")[2].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                let status = document.getElementsByTagName("input");
                for(let j = 0; j < items.length; j++){
                    if(status[j+1].checked === false){
                        items[j].style.display = "flex";
                    }
                    else{
                        items[j].style.display = "none";
                    }
                }
            }
            else{
                buttonPushed[1] = false;
                this.style = "display: flex;";
            }
        };
    }
    else{
        button.onclick = function(){
            if(buttonPushed[2] === false){
                buttonPushed[2] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[0] = false;
                buttonPushed[1] = false;
                document.getElementsByTagName("button")[0].style = "display: flex;";
                document.getElementsByTagName("button")[1].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                let status = document.getElementsByTagName("input");
                for(let j = 0; j < items.length; j++){
                    if(status[j+1].checked === true){
                        items[j].style.display = "flex";
                    }
                    else{
                        items[j].style.display = "none";
                    }
                }
            }
            else{
                buttonPushed[2] = false;
                this.style = "display: flex;";
            }
        };
    }
}
export default App;
