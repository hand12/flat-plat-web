import React from 'react'
import { connect } from 'react-redux'
import Actions from '../actions/PlanActions'
import MainContainer from './MainContainer.jsx'
import PlansContainer from './PlansContainer.jsx'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const App = (props) => (
  <BrowserRouter>
    <Switch>
			<Route path="/plans/hoge" component={ () => (<PlansContainer { ...props } />) } />
      <Route path="/plans/new" component={ () => (<MainContainer { ...props } />) } />
    </Switch>
  </BrowserRouter>
)

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)