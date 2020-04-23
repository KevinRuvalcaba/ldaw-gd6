import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Create from './components/Create';
import Index from './components/index';

function App() {
  const [todos, setTodos] = useState([
    { description: 'Create main folder', status: 'pending'},
    { description: 'Move to main folder', status: 'pending' },
    { description: 'Start npm in the folder2', status: 'pending' }
  ])

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({description: description, status: 'pending'});
    setTodos(cTodos);
  }

  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = 'done';
    setTodos(cTodos);
  }

  return (
    <div className="App">
      <Create addTodo={addTodo}/>
      <Index todos={todos} markAsDone={markAsDone}/>
    </div>
  );
}

export default App;
