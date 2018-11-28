import React, { Component } from 'react'

class Todo extends Component {
  render () {
    return <p> {this.props.id} {this.props.text} {this.props.completed? 'COMPLETED' : 'NOT-COMPLETED'} </p>
  }
}

export default Todo
