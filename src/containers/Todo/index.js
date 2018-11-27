import React, { Component } from 'react'

class Todo extends Component {
  render () {
    return <p>
      {this.props.id} {this.props.text} {this.props.completed}
    </p>
  }
}

export default Todo
