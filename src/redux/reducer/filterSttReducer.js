const filterSttReducer = (state = 'SHOW_ALL', action) => {
  if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALL'
  if (action.type === 'FILTER_COMPLETE') return 'COMPLETE'
  if (action.type === 'FILTER_INCOMPLETE') return 'INCOMPLETE'
  return state
}

export default filterSttReducer
