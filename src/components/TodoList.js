import React, { useState } from 'react';
import Todo from './Todo';
const axios = require('axios');

export default class TodoList extends React.Component{
  state = {
    tasks: [],
  }
  componentDidMount(){
    axios.get('http://localhost:3307/all', {mode: 'cors'})
      .then((response)=> {
        this.setState({tasks: response.data});
      });
      
  }
  redo(){
    axios.get('http://localhost:3307/all', {mode: 'cors'})
      .then((response)=> {
        this.setState({tasks: response.data});
      });
  }
  

  render(){
    //console.log('FUCK',this.state.tasks);
    //console.log('FUCK',this.props.todos);
    return (
      <table border="1">
        <thead>
          <th>#</th>
          <th>Task</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
        {this.props.todos.map((todo, i) => {
            return(
              <Todo todo={todo} />
            )
          })}
  
          
          {this.state.tasks.map((todo, i) => {
            return(
              <Todo todo={todo} redo={this.redo} />
            )
          })}
        </tbody>
      </table>
    );
    
  }
}


/*

const Index = ({todos, markAsDone}) => {
  todos = cry()
    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }
    return (
    <table border="1">
      <thead>
        <th>#</th>
        <th>Task</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>

        
        {todos.map((todo, i) => {
          return (
            <tr key={i} style={{backgroundColor: todo.status == 'pending' ? 'green' : 'grey'}}>
              <td>#{i}</td>
              <td>{todo.description}</td>
              <td>
                {todo.status == 'pending' && (
                  <input type="button" value="terminado?" onClick={(event) => handleMarkAsDone(event, i)}/>
                )}
              </td>
              <td>
                <input type="button" value="Eliminar" onClick={(event) => handleMarkAsDone(event, i) }/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Index;
*/