import { combineReducers } from 'redux'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const SHOW_ALL = 'SHOW_ALL'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SHOW_ACTIVE = 'SHOW_ACTIVE'


let nextTodoId = 0

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const setVisibility = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter: filter
})


todoReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case TOGGLE_TODO:
      state.map(
        todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

visibilityReducer = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }

}

export default combineReducers({
  todoReducer,
  visibilityReducer
})