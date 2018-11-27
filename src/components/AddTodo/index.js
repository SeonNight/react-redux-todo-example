import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../reducers/todo'


class AddTodo extends Component {
  render () {
    return (
      <div>
        <h1> ADDTODO </h1>
        <form onSubmit={e => {
            e.preventDefault()
            if (!this.input.value.trim()) {
              return
            }
            this.props.addTodo(this.input.value)
            this.input.value = ''
          }} >
          <input ref={node => (this.input = node)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

const getVisibleTodos = (state, vis) => {
  return state
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => {dispatch(addTodo(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)