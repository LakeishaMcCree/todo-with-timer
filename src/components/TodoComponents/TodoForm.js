import React from 'react' 

const TodoForm = props => {
    return(
        <form>
            <input
                name='todo'
                value={props.value}
                type='text'
                onChange={props.inputChangeHandler}
                placeholder='enter a task' /><br /><br />
            <button
                onClick={props.addTask}>Add a Task</button><br /><br />
            <button>Remove Completed</button>
        </form>
    )
}

export default TodoForm