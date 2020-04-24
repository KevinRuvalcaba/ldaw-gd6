import React, { useState } from 'react';
const axios = require('axios');

export default class Create extends React.Component {
    state = {
        description: '',
    }
    
    handleChange = event => {
        //console.log('dude  ', this.props.addTodo());
        this.setState({description: event.target.value})
        
    }

    handleCreateClick = event => {
        event.preventDefault();
        
        axios.post('http://localhost:3307/tasks', {description: this.state.description})
            .then(res => {
                console.log(res.data);
                this.props.addTodo(res.data);
            })
            .catch((err)=>{console.log(err)});
        
    }

    render(){
        return (
            <div>
                <label htmlFor="create-form"></label>
                <input 
                    type="text" 
                    
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                <input 
                    type="button" 
                    value="Create" 
                    onClick={this.handleCreateClick}/>
            </div>
        )
    }
}


/*

const Create = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    
    const handleTodoChange = (event) => {
        let val = event.target.value;
        setTodo(val);
    }

    const handleCreateClick = (event) => {
        addTodo(todo);
        setTodo('');
    }

    return (
        <div>
            <label htmlFor="create-form"></label>
            <input 
                type="text" 
                value={todo}
                onChange={handleTodoChange}/>
            <input 
                type="button" 
                value="Create" 
                onClick={handleCreateClick}/>
        </div>
    )
}

export default Create;
*/