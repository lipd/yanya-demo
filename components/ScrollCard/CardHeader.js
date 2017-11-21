import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { gray } from "../../utils/colors";

class CardHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>今日推荐</Text>
        <View style={styles.detail}>
          <Text style={styles.detailText}>全部3 ></Text>
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
    flex: 4,
  },
  detail: {
    flex: 1,
  },
  detailText: {
    color: gray
  }
})

export default CardHeader