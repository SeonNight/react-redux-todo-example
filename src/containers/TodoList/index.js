import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Todo from '../Todo'
import AddTodo from '../../components/AddTodo'
import Visibility from '../../components/VisibleTodo'

import { VisibilityFilters } from '../../reducers/visibility'

const MainBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`


const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  padding-bottom: 10px
`

const CenterHeader =styled.div `
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CenterBody =styled.div `
  width: 400px;
`

class TodoList extends Component {
  render () {
    return (
      <MainBody>
        <Header>
          <CenterHeader>
            <Visibility />
            <h1 className="ui header">Todo List</h1>
            <AddTodo />
          </CenterHeader>
        </Header>
        <CenterBody>
          <div className="ui middle aligned divided list">
            {this.props.todos.map((element, index) =>
              <Todo
              key={index}
              id = {element.id}
              text={element.text}
              completed={element.completed}/>)}
          </div>
        </CenterBody>
      </MainBody>
    )
  }
}

const getVisibility = (todos, visibility) => {
  switch(visibility) {
    default:
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => ({
  todos: getVisibility(state.todo, state.visibility)
})

const mapDispatchToProps = dispatch => ({
})

export default connect( mapStateToProps, mapDispatchToProps )(TodoList)