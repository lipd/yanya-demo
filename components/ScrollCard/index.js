import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

class ScrollCard extends Component {
  render() {
    return (
      <View>
        <CardHeader />
        <CardBody />
      </View>
    )
  }
}

export default ScrollCard