import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/reducer'

import App from './App.jsx'

function configureStore() {
  return createStore(
    reducer, applyMiddleware(thunkMiddleware)
  )
}

const store = configureStore(reducer)

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  }
}