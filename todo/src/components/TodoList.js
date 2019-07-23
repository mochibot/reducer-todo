import React from 'react';
import { List } from 'antd';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <List itemLayout='horizontal' size='large' bordered>
      {props.tasks.map(item => <Todo key={item.id} task={item} toggleTask={props.toggleTask}/>)}
    </List>
  )
}

export default TodoList;