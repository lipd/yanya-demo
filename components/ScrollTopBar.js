import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { black, gray } from '../utils/colors'

class ScrollTopBar extends Component {
  render() {
    const topics = this.props.topics
    return (
      <View style={styles.scrollViewContainer}>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {topics.map(topic => (
            <View style={styles.topicContainer} key={topic}>
              <Text style={styles.topicText}>{topic}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: 35
  },
  container: {
    borderBottomWidth: 0.2,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    height: 50
  },
  topicContainer: {
    paddingRight: 30,
    height: 50
  },
  topicText: {
    color: gray,
    fontSize: 14,
    marginTop: 10
  }
})

export default ScrollTopBar
