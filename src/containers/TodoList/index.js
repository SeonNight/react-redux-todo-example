import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../Todo'


class TodoList extends Component {
  render () {
    return (
      <div>
        <h1>TODO LIST</h1>
        <Todo />
      </div>
    )
  }
  /*
  render () {
    return (
      <div>
        {this.props.todos.map((element, index) =>
          <Todo
          key={index}
          id = {element.id}
          text={element.text}
          completed={element.completed}/>)}
      </div>
    )
  }*/
}

/*
{this.props.todos.map((element, index) =>
  <Todo
  key={index}
  id = {element.id}
  text={element.text}
  completed={element.completed}/>)}
*/
/*
const mapStateToProps = state => ({
  todos: state
})
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(TodoList)
*/
export default connect( )(TodoList)