import React from 'react' 

//individual todo components will live here and be rendered repeatedly in the TodoList.js file

const Todo = props => {
    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;