const SET_VISIBILITY = 'SET_VISIBILITY'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibility = (filter) => ({
  type: SET_VISIBILITY,
  filter
})

const reducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}

export default reducer