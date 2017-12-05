import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, lineGray } from '../utils/colors'

class List extends Component {
  render() {
    const items = this.props.items
    return (
      <View style={styles.container}>
        {items.map((item, index) => {
          const last = index + 1 === items.length
          console.log(last)
          return (
            <View key={item.title} style={styles.item}>
              {item.icon()}
              <View
                style={
                  last
                    ? [styles.textContainer, { borderBottomWidth: 0 }]
                    : styles.textContainer
                }
              >
                <Text>{item.title}</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  item: {
    flexDirection: 'row',
    backgroundColor: white,
    paddingLeft: 20
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: lineGray,
    justifyContent: 'center'
  },
  icon: {
    width: 50
  }
})

export default List
