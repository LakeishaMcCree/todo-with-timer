import React, { Component } from 'react'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Pomodoro from './components/Timer-Components/Pomodoro'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [{
        //task: '',
        //id: '',
        //completed: false 
      }], //each todo will exist as objects inside of the todos array
      todo: '',
      restMinutes: 5,
      workMinutes: 25,
      seconds: 0,
      break: false,
      start: false, 
      interval: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask ={
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    })
  }

  toggleComplete = itemId => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed
      }
      return todo 
    });
    this.setState({todos, todo: ''})
  }

  removeItems = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return!todo.completed
        })
      }
    })
  }

  timer = () => {
    this.setState({
      seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1
    })

    if (this.state.break) {
      this.setState({restMinutes: this.state.seconds === 0 ? this.state.restMinutes-1 : this.state.restMinutes === 5 ? 4 : this.state.restMinutes})
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}/>
        <TodoForm
          todos={this.state.todos}
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
          removeItems={this.removeItems}/> 
      </div>
    )
  }
}
  

export default App;
