import React from 'react' 

//individual todo components will live here and be rendered repeatedly in the TodoList.js file

const Todo = props => {
    return (
        <div
            key={props.todo.id}
            onClick={event => {
                props.toggleComplete(props.todo.id)
            }}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;