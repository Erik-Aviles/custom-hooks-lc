 import '../styles/App.css';
import { Counter }from './CounterApp';
import { MouseApp } from './MouseApp';
import { TodoApp }from './TodoApp';

function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <Counter/>
     <TodoApp/>
     <MouseApp/>
    </div>
  );
}

export default App;
