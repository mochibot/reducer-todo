import React, { useState } from 'react';
import moment from 'moment';
import { Form, Icon, Input, Button, DatePicker } from 'antd';

const TodoForm = (props) => {
  const [input, setInput] = useState({
    item: '',
    category: ''
  })

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    let newTask = {
      ...input,
      tags: input.tags.toUpperCase().match(/[A-Z0-9]+/g)
    }
    props.addTask(event, newTask)
    setInput('')
  }

  const dateHandler = (date, dateString) => {
    setInput({
      ...input,
      completeBy: dateString
    })
  }

  const disabledDate = (current) => {
    return current < moment().endOf('day');
  }

  return (
    <div>
      <Form onSubmit={submitHandler} style={{'width': '500px', 'margin': '0 auto'}}>
        <Input 
          suffix={<Icon style={{'fontSize': '24px'}} type='carry-out' />} 
          type='text' 
          name='item' 
          placeholder='Enter task' 
          value={input.item} 
          onChange={inputHandler}
          size='large'
          style={{'margin': '10px 0', 'fontSize': '20px'}} />
        <Input 
          suffix={<Icon style={{'fontSize': '24px'}} type='tags' />} 
          type='text' 
          name='tags' 
          placeholder='Enter tags (separated by space or comma)' 
          value={input.tags} 
          onChange={inputHandler} 
          size='large' 
          style={{'margin': '10px 0', 'fontSize': '20px'}} />
        <DatePicker 
          disabledDate={disabledDate} 
          placeholder='Select due date' 
          onChange={dateHandler} 
          size='large' 
          style={{'margin': '10px auto', 'display': 'block', 'fontSize': '20px', 'width': '300px'}} />
        <Button 
          type='primary' 
          icon='plus-circle' 
          style={{'width': '240px', 'fontSize': '20px', 'margin': '10px 0' }}
          onClick={submitHandler}>Add tasks</Button>
      </Form>
      <Button 
          type='danger' 
          icon='delete' 
          style={{'width': '240px', 'margin': '10px auto', 'display': 'block', 'fontSize': '20px'}} 
          onClick={props.clearCompleted}>Clear Completed</Button>
    </div>
  )
}

export default TodoForm;