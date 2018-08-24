import React, { Component } from 'react'
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Separator
} from 'react-native'

import { connect } from 'react-redux'
import {
  toggleShow,
  toggleComplete,
  deleteTask,
  toggleIsAdding,
  toggleUpdate,
  updateTask
} from '../redux/actionCreators'

import Swipeout from 'react-native-swipeout'

class Task extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true,
      taskEdit: this.props.myTask.task
    }
  }

  render () {
    const { task, complete, id, deleted, updated } = this.props.myTask
    const textDecorationLine = complete ? 'line-through' : 'none'
    const textColor = complete ? '#079992' : '#2f3542'
    let swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: '#e84118',
        // underlayColor: "rgba(0, 0, 0, 1, 0.6)"
        onPress: () => this.props.deleteTask(id)
      },
      {
        text: 'Edit',
        backgroundColor: '#fbc531',
        // underlayColor: "rgba(0, 0, 0, 1, 0.6)"
        onPress: () => {
          this.props.toggleUpdate(id)
        }
      }
    ]

    return (
      <View>
        {deleted ? null : updated ? (
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.textInput}
              value={this.state.taskEdit}
              onChangeText={text =>
                this.setState({ taskEdit: text })
              }
              placeholder='My task'
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.props.updateTask(
                    id,
                    this.state.taskEdit
                  )
                }
                style={styles.buttonText}
              >
                <Text>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.toggleUpdate(id)}
                style={styles.buttonText}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Swipeout
            right={swipeBtns}
            autoClose
            backgroundColor='transparent'
            // style={{ height: 200 }}
          >
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => this.props.toggleComplete(id)}
              >
                {complete ? (
                  <Image
                    source={require('../public/img/checked.png')}
                  />
                ) : (
                  <Image
                    source={require('../public/img/noChecked.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.toggleComplete(id)}
              >
                <Text
                  style={{
                    textDecorationLine,
                    color: textColor,
                    marginLeft: 20,
                    fontSize: 18
                  }}
                >
                  {task}
                </Text>
              </TouchableOpacity>
            </View>
          </Swipeout>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10
  },
  textInput: {
    height: 40,
    width: 350,
    backgroundColor: '#dfe6e9',
    margin: 10,
    paddingHorizontal: 10,
    borderColor: '#636e72',
    borderWidth: 1
  },
  containerTextInput: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    backgroundColor: '#b2bec3',
    margin: 10,
    paddingHorizontal: 10
  }
})

export default connect(
  null,
  {
    toggleComplete,
    toggleShow,
    deleteTask,
    toggleIsAdding,
    updateTask,
    toggleUpdate
  }
)(Task)
