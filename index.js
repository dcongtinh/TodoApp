/** @format */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class TodoList extends Component {
  render () {
    // console.disableYellowBox = true;
    return (
    // #4 tich hop vao ung dung react
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList)
