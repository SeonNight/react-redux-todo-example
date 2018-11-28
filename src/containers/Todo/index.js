import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { toggleTodo } from '../../reducers/todo'


const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const Text = styled.div`
  padding-left: 10px;
`

class Todo extends Component {
  handleCheck = event => {
    this.props.toggleTodo(event.target.id)
  }

  render () {
    return (
      <div className="item">
        <Item className="content" >
          <input type="checkbox" onChange={this.handleCheck} checked={this.props.completed} id={this.props.id}/>
          <Text className="header"> {this.props.text} </Text>
        </Item>
      </div>
    )
  }
}

//
//      <div>
//        <input type="checkbox" onChange={this.handleCheck} checked={this.props.completed} id={this.props.id}/> {this.props.text}
//      </div>

//return <p> {this.props.id} {this.props.text} {this.props.completed? 'COMPLETED' : 'NOT-COMPLETED'} </p>
const mapStateToProps = state => ({
  todos: state.todo
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(Todo)