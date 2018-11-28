import { combineReducers } from 'redux'
import todo from './todo'
import visibility from './visibility'

export const rootReducer = combineReducers({todo,visibility})