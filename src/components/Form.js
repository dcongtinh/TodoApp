import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { addTask, toggleIsAdding } from '../redux/actionCreators'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: ''
    }
    this.onAdd = this.onAdd.bind(this)
  }

  onAdd () {
    const { task } = this.state
    this.props.addTask(task)
    this.props.toggleIsAdding()
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.task}
          onChangeText={text => this.setState({ task: text })}
          placeholder='My task'
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: '#dfe6e9',
    margin: 10,
    paddingHorizontal: 10,
    borderColor: '#636e72',
    borderWidth: 1
  },
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(
  null,
  { addTask, toggleIsAdding }
)(Form)
