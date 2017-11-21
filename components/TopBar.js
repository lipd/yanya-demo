import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { black } from "../utils/colors"

class TopBar extends Component {
  render() {
    const title = this.props.title
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  container: {
    borderBottomWidth: 0.2
  }
})

export default TopBar
