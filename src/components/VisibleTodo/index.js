import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters, setVisibility } from '../../reducers/visibility'

class VisibleTodo extends Component {
  setVisibility = (event) => {
    switch(event.target.id) {
      default:
      case '0':
        this.props.setVisibility(VisibilityFilters.SHOW_ALL)
        break;
      case '1':
        this.props.setVisibility(VisibilityFilters.SHOW_COMPLETED)
        break;
      case '2':
        this.props.setVisibility(VisibilityFilters.SHOW_ACTIVE)
        break;
    }
  }

  render () {
    return <div>
      <button onClick={this.setVisibility} id='0'>SHOW ALL</button>
      <button onClick={this.setVisibility} id='1'>SHOW COMPLETED</button>
      <button onClick={this.setVisibility} id='2'>SHOW ACTIVE</button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    visibility: state.visibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibility: value => {dispatch(setVisibility(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodo)