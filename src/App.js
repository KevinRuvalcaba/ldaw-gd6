import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Create from './components/Create';
import TodoList from './components/TodoList';
const axios = require('axios');

 function App() {
  const [todos, setTodos] = useState(
    []
  )
  const addTodo = (task) => {
    let cTodos = Object.assign([], todos);
    console.log(task)
    cTodos.push({id:task.id, description: task.description, status: 'pending'});
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
      <TodoList markAsDone={markAsDone} todos={todos}/>
    </div>
  );
}

export default App;
