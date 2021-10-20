import './App.css';
import './main.js';
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
            <button style={{display: 'flex'}}>All</button>
            <button style={{display: 'flex'}}>Active</button>
            <button style={{display: 'flex'}}>Completed</button>
          </ul>
          <div className="todo-app__clean" style={{visibility: 'hidden'}}>
            <button>Clear completed</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
