export function toggleIsAdding () {
  return { type: 'TOGGLE_IS_ADDING' }
}

export function addTask (task) {
  return {
    type: 'ADD_TASK',
    task
  }
}

export function toggleComplete (id) {
  return {
    type: 'TOGGLE_COMPLETE',
    id
  }
}

export function toggleShow (id) {
  return {
    type: 'TOGGLE_SHOW_TASK',
    id
  }
}

export function deleteTask (id) {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export function toggleUpdate (id) {
  return {
    type: 'TOGGLE_UPDATE',
    id
  }
}

export function updateTask (id, task) {
  return {
    type: 'UPDATE_TASK',
    id,
    task
  }
}
