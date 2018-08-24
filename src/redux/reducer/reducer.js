import { combineReducers } from 'redux'

import arrTasksReducer from './arrTasksReducer'
import filterSttReducer from './filterSttReducer'
import isAddingReducer from './isAddingReducer'

const reducer = combineReducers({
  arrTasks: arrTasksReducer,
  filterStt: filterSttReducer,
  isAdding: isAddingReducer
})

export default reducer
