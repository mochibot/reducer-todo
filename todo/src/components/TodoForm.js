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
    props.addTask(event, input)
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
      <Form onSubmit={submitHandler}>
        <Input suffix={<Icon type='carry-out' />} type='text' name='item' placeholder='Task' value={input.item} onChange={inputHandler}/>
        <Input suffix={<Icon type='unordered-list' />} type='text' name='category' placeholder='Category' value={input.category} onChange={inputHandler}/>
        <DatePicker disabledDate={disabledDate} placeholder='Select due date' onChange={dateHandler}/>
        <Button type='primary' icon='plus-circle' onClick={submitHandler}>Add tasks</Button>
      </Form>
      <Button type='danger' icon='delete' onClick={props.clearCompleted}>Clear Completed</Button>
    </div>
  )
}

export default TodoForm;