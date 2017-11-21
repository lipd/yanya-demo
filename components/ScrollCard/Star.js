import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import { yellow, gray } from '../../utils/colors'

class Star extends Component {
  render() {
    const { star, score } = this.props
    let light = ''
    let dark = ''
    while (light.length < star) {
      light += '★'
    }
    while (dark.length < 5 - star) {
      dark += '★'
    }
    return (
      <View style={styles.container}>
        <Text style={{ color: yellow }}>{light}</Text>
        <Text style={{ color: gray }}>{dark}</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5
  },
  score: {
    marginLeft: 10,
    color: gray
  }
})

export default Star
