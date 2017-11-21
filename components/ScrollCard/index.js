import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

class ScrollCard extends Component {
  render() {
    const { type, num, title } = this.props
    return (
      <View>
        <CardHeader title={title} num={num}/>
        <CardBody type={type} />
      </View>
    )
  }
}

export default ScrollCard