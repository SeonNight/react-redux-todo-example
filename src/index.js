import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'

import AddTodo from './components/AddTodo'
import Visibility from './components/VisibleTodo'
import TodoList from './containers/TodoList'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <Visibility />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('root')
)
