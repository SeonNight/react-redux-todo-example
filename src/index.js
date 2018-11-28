import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/index'

import TodoList from './containers/TodoList'

import 'semantic-ui-css/semantic.min.css';

const logger = store => next => action => {
  //Get before reducer
  console.log(store.getState())
  console.log(action.type)
  console.log(action)
  next(action)
}

const nextLogger = store => next => action => {
  //Get before reducer
  console.log("Secont middle")
  next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, nextLogger)))
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
