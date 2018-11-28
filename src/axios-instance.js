/*
import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/'
})
export default instance
*/

/*
//in actions (reducers)
import axios from '../axios-instance.js'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const GET_TODOS = 'GET_TODOS'
export const TOGGLE_ERROR = 'TOGGLE_ERROR'

export const getTodos = todos => ({
  type: GET_TODOS,
  todos
})

export const toggleLoading = () => ({
  type: TOGGLE_LOADING
})

export const toggleError = (err) => ({
  type: TOGGLE_ERROR,
  err
})

export const getTodosAsync = () => dispatch => {
  dispatch(toggleLoading())
  axios.get('todos.json')
    .then(({data}) => Object.entries(data).map(([key, value]) => ({id: key, ..values})))
    .then(todo => dispatch(getTodos(todo)))
    .catch(err => dispatch(toggleError(err)))
}

*/