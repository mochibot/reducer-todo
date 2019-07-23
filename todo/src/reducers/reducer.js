export const initialState = {
  tasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3939889
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': 
      let newTask = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };

    case 'TOGGLE_TASK':
      let updatedTasks = state.tasks.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed 
          }
        } else {
          return item;
        }
      })
      return {
        ...state,
        tasks: updatedTasks
      };
    
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter(item => item.completed === action.payload)
      };

    default:
      return state;
  }
}