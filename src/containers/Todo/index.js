import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../reducers/todo'

class Todo extends Component {
  handleCheck = event => {
    this.props.toggleTodo(event.target.id)
  }


  render () {
    return (
      <div>
        <input type="checkbox" onClick={this.handleCheck} checked={this.props.completed} id={this.props.id}/>
        <p> {this.props.text} </p>
      </div>
    )
  }
}

//return <p> {this.props.id} {this.props.text} {this.props.completed? 'COMPLETED' : 'NOT-COMPLETED'} </p>
const mapStateToProps = state => ({
  todos: state.todo
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(Todo)