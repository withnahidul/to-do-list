import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nis Todo List</h1>
      </header>
      <Form></Form>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
