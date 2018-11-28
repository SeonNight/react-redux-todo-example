import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../reducers/todo'

class AddTodo extends Component {
  render () {
    return (
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!this.input.value.trim()) {
              return
            }
            this.props.addTodo(this.input.value)
            this.input.value = ''
          }} >
          <div className="ui input"> <input placeholder='example: Go Buy Milk' ref={node => (this.input = node)} /> </div>
          <button className="ui primary button" type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => {dispatch(addTodo(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)