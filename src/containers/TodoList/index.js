import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../Todo'
import toggleTodo from '../../reducers/todo'

import { VisibilityFilters } from '../../reducers/visibility'


class TodoList extends Component {
  render () {
    return (
      <div>
        <h1>TODO LIST</h1>
        <div>
          {this.props.todos.map((element, index) =>
            <Todo
            key={index}
            id = {element.id}
            text={element.text}
            completed={element.completed}/>)}
        </div>
      </div>
    )
  }
}

const getVisibility = (todos, visibility) => {
  switch(visibility) {
    default:
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.map(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.map(t => !t.completed)
  }
}

const mapStateToProps = state => ({
  todos: getVisibility(state.todo, state.visibility)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(TodoList)