import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { toggleTodo, deleteTodo } from '../../reducers/todo'


const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Text = styled.div`
  padding-left: 10px;
`

class Todo extends Component {
  handleCheck = event => {
    this.props.toggleTodo(event.target.id)
  }

  handleDelete = event => {
    this.props.deleteTodo(event.target.id)
  }

  render () {
    return (
      <div className="item">
        <Item className="content" >
          <Content>
            <input type="checkbox" onChange={this.handleCheck} checked={this.props.completed} id={this.props.id}/>
            <Text className="header"> {this.props.text} </Text>
          </Content>
          <button className="ui inverted red button" onClick={this.handleDelete} id={this.props.id}>Delete</button>
        </Item>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(Todo)