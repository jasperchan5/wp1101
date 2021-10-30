import './App.css';
import {clearCompleted} from './main.js';
import {filters} from './main.js';
function App() {
  return (
    <div id="root_2" className="todo-app__root">
        <header className="todo-app__header">
            <h1 className="todo-app__title">todos</h1>
        </header>
        <section className="todo-app__main">
            <input className="todo-app__input"></input>
            <ul className="todo-app__list" id="todo-list"></ul>
        </section>
        <footer className="todo-app__footer" id="todo-footer" style={{display: 'none'}}> 
            <div className="todo-app__total">-999 Left</div>
            <ul className="todo-app__view-buttons">
            <button style={{display: 'flex'}} onClick={()=>{filters(0);}}>All</button>
            <button style={{display: 'flex'}} onClick={()=>{filters(1);}}>Active</button>
            <button style={{display: 'flex'}} onClick={()=>{filters(2);}}>Completed</button>
            </ul>
            <div className="todo-app__clean" style={{visibility: 'hidden'}} onClick={()=>{clearCompleted();}}>
            <button>Clear completed</button>
            </div>
        </footer>
    </div>
  );
}
export default App;