import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import 'antd/dist/antd.css'
import './App.css';

const App = () => {
  const [{ tasks }, dispatch] = useReducer(reducer, initialState);
  
  const addTask = (event, item) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      payload: item
    })
  }
  
  const toggleTask = (itemId) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: itemId
    })
  }

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CLEAR_COMPLETED',
      payload: false
    })
  }

  return (
    <div className="App">
      <header className='App-header'>
        My Todo App (v3) 
      </header>
      <div className='App-content'>
        <TodoForm addTask={addTask} clearCompleted={clearCompleted}/>
        <TodoList tasks={tasks} toggleTask={toggleTask}/>
      </div>
    </div>
  );
}

export default App;
