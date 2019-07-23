import React from 'react';

const Todo = (props) => {
  return (
    <div>
      <div onClick={() => props.toggleTask(props.task.id)}>{props.task.item}</div>
    </div>
  )
}

export default Todo;