import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import Task from './src/components/Task'
import Filter from './src/components/Filter'
import Header from './src/components/Header'
import Form from './src/components/Form'

class App extends Component {
  getTaskList () {
    const { filterStt, arrTasks } = this.props
    if (filterStt === 'COMPLETE') return arrTasks.filter(e => e.complete)
    if (filterStt === 'INCOMPLETE') { return arrTasks.filter(e => !e.complete) }
    return arrTasks
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ecf0f1',
          alignSelf: 'stretch'
        }}
      >
        <Header />

        <View style={{ flex: 10 }}>
          {this.props.isAdding ? <Form /> : null}
          <FlatList
            data={this.getTaskList()}
            renderItem={({ item }) => <Task myTask={item} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>

        <Filter />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    filterStt: state.filterStt,
    arrTasks: state.arrTasks,
    isAdding: state.isAdding
  }
}
export default connect(mapStateToProps)(App)
