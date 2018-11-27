import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import NavBar from './components/NavBar'
import Home from './containers/Home'
import About from './containers/About'

ReactDOM.render(
  <Router>
    <Fragment>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Fragment>
  </Router>,
  document.getElementById('root')
)
