import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters, setVisibility } from '../../reducers/visibility'

class VisibleTodo extends Component {
  setVisibility = (event) => {
    this.props.setVisibility(event.target.id)
  }

  currentVisibility = (id) => {
    if(id === this.props.visibility) {
      return "ui active button"
    } else {
      return "ui button"
    }
  }

  render () {
    return (
      <div className="ui buttons">
        <button className={this.currentVisibility(VisibilityFilters.SHOW_ALL)} onClick={this.setVisibility} id={VisibilityFilters.SHOW_ALL}>SHOW ALL</button>
        <button className={this.currentVisibility(VisibilityFilters.SHOW_COMPLETED)} onClick={this.setVisibility} id={VisibilityFilters.SHOW_COMPLETED}>SHOW COMPLETED</button>
        <button className={this.currentVisibility(VisibilityFilters.SHOW_ACTIVE)} onClick={this.setVisibility} id={VisibilityFilters.SHOW_ACTIVE}>SHOW ACTIVE</button>
      </div>
    )
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