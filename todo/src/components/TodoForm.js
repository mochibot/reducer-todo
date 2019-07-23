import React, { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    props.addTask(event, input)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={input} onChange={inputHandler}/>
        <button >Add tasks</button>
      </form>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;