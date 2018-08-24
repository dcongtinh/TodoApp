// #1 defaultState
const defaultArrTasks = [{
  id: 1,
  task: 'ReactJs',
  complete: false,
  deleted: false,
  updated: false
},
{
  id: 2,
  task: 'React-Native',
  complete: false,
  deleted: false,
  updated: false
},
{
  id: 3,
  task: 'Redux',
  complete: true,
  deleted: false,
  updated: false
},
{
  id: 4,
  task: 'MongoDB',
  complete: true,
  deleted: false,
  updated: false
},
{
  id: 5,
  task: 'Docker',
  complete: false,
  deleted: false,
  updated: false
},
{
  id: 6,
  task: 'Visual Studio Code',
  complete: false,
  deleted: false,
  updated: false
},
{
  id: 7,
  task: 'Express',
  complete: true,
  deleted: false,
  updated: false
},
{
  id: 8,
  task: 'Todo-App',
  complete: true,
  deleted: false,
  updated: false
}
]

const arrTasksReducer = (state = defaultArrTasks, action) => {
  if (action.type === 'TOGGLE_COMPLETE') {
    return state.map(e => {
      if (e.id !== action.id) return e
      return {
        ...e,
        complete: !e.complete
      }
    })
  }
  if (action.type === 'ADD_TASK') {
    return [
      {
        id: state.length + 1,
        task: action.task,
        complete: false
      }
    ].concat(state)
  }
  if (action.type === 'DELETE_TASK') {
    return state.map(e => {
      if (e.id !== action.id) return e
      return {
        ...e,
        deleted: true
      }
    })
  }
  if (action.type === 'TOGGLE_UPDATE') {
    return state.map(e => {
      if (e.id !== action.id) return e
      return {
        ...e,
        updated: !e.updated
      }
    })
  }
  if (action.type === 'UPDATE_TASK') {
    return state.map(e => {
      if (e.id !== action.id) return e
      return {
        ...e,
        task: action.task,
        updated: false
      }
    })
  }
  return state
}

export default arrTasksReducer
