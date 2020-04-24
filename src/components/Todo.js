import React from 'react';
const axios = require('axios');
export default class Todo extends React.Component {
    state = {
        status: '',
        display: 'true'
    }
    componentDidMount(){
        this.setState({status: this.props.todo.status})
    }

    markAsDone = event => {
        axios.post(`http://localhost:3307/tasks/:id/done`, {id: this.props.todo.id})
            .then((res) => {console.log(res.data);})
            .catch((err) => {console.log(err);});
            this.setState({status: 'done',display: 'true'})
    }

    deleteTask = event => {
        axios.post(`http://localhost:3307/task/:id/delete`, {id: this.props.todo.id})
            .then((res) => {console.log(res.data);})
            .catch((err) => {console.log(err);});
            this.setState({status: 'done',display: 'none'})
    }
    
    render(){
        return (
            <tr id={this.props.todo.id} key={this.props.todo.id} style= { {display:this.state.display, backgroundColor: this.state.status == 'pending' ? 'green' : 'grey'}}>
              <td>#{this.props.todo.id}</td>
              <td>{this.props.todo.description}</td>
              <td>
                {this.state.status == 'pending' && (
                  <input type="button" value="terminado?"  onClick={this.markAsDone} />
                )}
              </td>
              <td>
                <input type="button" value="Eliminar" onClick={this.deleteTask}/>
              </td>
            </tr>
          )
    }
}