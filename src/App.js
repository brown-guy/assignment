import './App.css';
import Adder from './components/Adder';
import Todo from './components/Todo'
import { useState } from 'react';


function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <div className='h-100'>
      < h1 className='App'> ToDo List</h1 >
      <div className='bg-light w-50 m-auto rounded border border-dark' id='parent'>
        <Adder
          task={task}
          setTask={setTask}
          todos={todos}
          setTodos={setTodos}
        />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </div >
  );
}

export default App;
