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
  width: 300px;
  word-wrap: break-word;
`

class Todo extends Component {
  state = {
    settings: false
  }
  handleCheck = event => {
    this.props.toggleTodo(event.target.id)
  }

  handleDelete = event => {
    this.props.deleteTodo(event.target.id)
  }

  handleSettings = event => {
    this.setState({settings: !this.state.settings})
  }

  showSettings = activate => {
    if(activate) {
      return <button className="ui inverted red button" onClick={this.handleDelete} id={this.props.id}>Delete</button>
    }
  }

  render () {
    return (
      <div className="item">
        <Item className="content" >
          <Content>
            <input type="checkbox" onChange={this.handleCheck} checked={this.props.completed} id={this.props.id}/>
            <Text className="header"> {this.props.text} </Text>
          </Content>
          <div>
            <button onClick={this.handleSettings}>Settings</button>
            {this.showSettings(this.state.settings)}
          </div>
        </Item>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(Todo)