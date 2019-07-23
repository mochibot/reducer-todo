export const initialState = {
  tasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 1563840000000,
      category: 'Coding',
      completeBy: '2019-07-23'
    },
    {
      item: 'Overdue task',
      completed: false,
      id: 1563580800000,
      category: 'Coding',
      completeBy: '2019-07-22'
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': 
      let newTask = {
        item: action.payload.item,
        category: action.payload.category,
        completeBy: action.payload.completeBy,
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