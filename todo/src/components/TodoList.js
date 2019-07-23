import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map(item => <Todo key={item.id} task={item} toggleTask={props.toggleTask}/>)}
    </div>
  )
}

export default TodoList;