import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Filter extends Component {
  getTextStyle (statusName) {
    const { filterStt } = this.props
    if (statusName === filterStt) { return { color: 'yellow', fontWeight: 'bold' } }
    return styles.buttonText
  }

  setFilterStt (actionType) {
    this.props.dispatch({ type: actionType })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setFilterStt('FILTER_SHOW_ALL')}
        >
          <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setFilterStt('FILTER_COMPLETE')}
        >
          <Text style={this.getTextStyle('COMPLETE')}>COMPLETE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setFilterStt('FILTER_INCOMPLETE')}
        >
          <Text style={this.getTextStyle('INCOMPLETE')}>
                        INCOMPLETE
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a4b0be',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonText: { color: 'white' }
})

function mapStateToProps (state) {
  return {
    filterStt: state.filterStt
  }
}
export default connect(mapStateToProps)(Filter)
