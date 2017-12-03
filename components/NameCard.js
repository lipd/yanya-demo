import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { lineGray, white } from '../utils/colors'

function CardHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.personContainer}>
        <Image
          source={{
            uri: 'file:///Users/lipeidao/Projects/yanya-demo/utils/img/m1.png'
          }}
          style={styles.thumbnail}
        />
        <View style={styles.information}>
          <Text style={styles.name}>李佩道</Text>
          <Text>中国音乐学院</Text>
        </View>
      </View>
      <View style={styles.detail}>
        <Text>详情</Text>
      </View>
    </View>
  )
}

function CardFooter() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.item}>
        <Text>动态</Text>
        <Text>2</Text>
      </View>
      <View style={styles.item}>
        <Text>关注</Text>
        <Text>152</Text>
      </View>
      <View style={styles.item}>
        <Text>粉丝</Text>
        <Text>472</Text>
      </View>
      <View style={[styles.item, { borderRightWidth: 0 }]}>
        <Text>我的资料</Text>
        <Text>pen</Text>
      </View>
    </View>
  )
}

class NameCard extends Component {
  render() {
    return (
      <View>
        <CardHeader />
        <CardFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: white,
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: lineGray
  },
  personContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  thumbnail: {
    marginRight: 15,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  information: {
    flex: 2,
    justifyContent: 'center'
  },
  detail: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    marginBottom: 5
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: white
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: lineGray
  }
})

export default NameCard
