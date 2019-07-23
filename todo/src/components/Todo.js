import React from 'react';
import moment from 'moment';
import { List, Icon, Typography, Tag } from 'antd';

const Todo = (props) => {
  let curr = moment().format('YYYY-MM-DD');
  
  return (
    <List.Item>
      <Icon style={{ 'fontSize': '30px', 'color': 'black' }} type={props.task.completed ? 'check-square': 'border'} onClick={() => props.toggleTask(props.task.id)} />
      <Typography.Text style={{ 'fontSize': '18px', 'marginLeft': '10px' }}>{props.task.item}</Typography.Text>
      {props.task.tags.map(item => <Tag color='geekblue'>{item}</Tag>)}
      <List.Item.Meta description={`due ${moment(props.task.completeBy).endOf('day').fromNow()}`}/>
      {(!props.task.completed && moment(curr).isAfter(props.task.completeBy, 'day')) && <Typography.Text style={{'color': 'red'}}>Overdue</Typography.Text>}
    </List.Item>
  )
}

export default Todo;