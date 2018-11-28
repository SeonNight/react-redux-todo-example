const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

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

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id: id
})

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(
        todo => parseInt(todo.id) === parseInt(action.id) ? { ...todo , completed: !todo.completed } : todo
      )
    case DELETE_TODO:
      return state.filter(todo => parseInt(todo.id) !== parseInt(action.id))
    default:
      return state
  }
}

export default reducer