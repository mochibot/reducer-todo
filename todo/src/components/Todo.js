import React from 'react';
import moment from 'moment';
import { List, Icon, Typography, Tag } from 'antd';

const Todo = (props) => {
  let curr = moment().format('YYYY-MM-DD');
  
  return (
    <List.Item>
      <Icon 
        style={{'fontSize': '30px', 'color': 'black'}} 
        type={props.task.completed ? 'check-square': 'border'} 
        onClick={() => props.toggleTask(props.task.id)} />
      <Typography.Text 
        style={{ 'fontSize': '20px', 'marginLeft': '10px', 'textDecoration': `${props.task.completed ? 'line-through' : 'none'}` }}>{props.task.item}</Typography.Text>
      <List.Item.Meta description={`due ${moment(props.task.completeBy).endOf('day').fromNow()}`}/>
      {props.task.tags.map(item => <Tag color='geekblue' style={{'fontSize': '15px'}}>{item}</Tag>)}
      {(!props.task.completed && moment(curr).isAfter(props.task.completeBy, 'day')) && <Tag color='red' style={{'fontSize': '15px'}}>OVERDUE</Tag>}
    </List.Item>
  )
}

export default Todo;