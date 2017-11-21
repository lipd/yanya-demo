import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { black, gray, yellow } from '../utils/colors'

class ScrollTopBar extends Component {
  render() {
    const { topics, category } = this.props
    return (
      <View style={styles.scrollViewContainer}>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.category}>{category}：</Text>
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
    paddingLeft: 15,
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
  },
  category: {
    color: yellow,
    marginTop: 10,
    marginRight: 5,
    fontWeight: '600'
  }
})

export default ScrollTopBar
