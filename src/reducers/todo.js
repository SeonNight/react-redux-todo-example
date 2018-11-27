const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

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

const reducer = (state = [], action) => {
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

export default reducer