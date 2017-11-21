import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons'
import { gray, lineGray, yellow, purple, pink } from '../utils/colors'

class MiddleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.part}>
          <SimpleLineIcons name="playlist" size={30} color={purple} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>找音乐</Text>
            <Text style={styles.subtitle}>演员/乐团/指挥</Text>
          </View>
        </View>
        <View
          style={[
            styles.part,
            { borderLeftWidth: StyleSheet.hairlineWidth, borderColor: lineGray }
          ]}
        >
          <FontAwesome name="heart-o" size={30} color={pink} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>我的音乐</Text>
            <Text style={styles.subtitle}>未登录</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: lineGray,
    flexDirection: 'row'
  },
  part: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20
  },
  textContainer: {
    paddingLeft: 20
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4
  },
  subtitle: {
    color: gray,
    fontSize: 12
  }
})

export default MiddleBar
