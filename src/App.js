import React, { Component } from 'react'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [{
        //task: '',
        //id: '',
        //completed: false 
      }], //each todo will exist as objects inside of the todos array
      todo: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList
          todos={this.state.todos}/>
        <TodoForm
          todos={this.state.todos}/> 
      </div>
    )
  }
}
  

export default App;
