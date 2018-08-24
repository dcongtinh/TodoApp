import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { connect } from 'react-redux'
import { toggleIsAdding } from '../redux/actionCreators'

class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.header}>
        <Text />
        <Text>MY TASKS</Text>
        <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
          <Image source={require('../public/img/plus.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
  }
})

function mapDispatchToProps () {
  return { toggleIsAdding }
}
export default connect(
  null,
  mapDispatchToProps()
)(Header)
