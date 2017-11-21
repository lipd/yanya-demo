import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { gray } from '../../utils/colors'

class CardHeader extends Component {
  render() {
    const { num, title } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detail}>
          <Text style={styles.detailText}>全部{num} ></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    flex: 4
  },
  detail: {
    flex: 1
  },
  detailText: {
    color: gray
  }
})

export default CardHeader
