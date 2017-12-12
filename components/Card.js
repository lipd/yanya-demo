import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { lineGray, gray, blue, red, white } from '../utils/colors'

const path = 'file:///Users/lipeidao/Projects/yanya-demo/utils/img/'

function CardHeader({ imgPath, name, time }) {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: path + imgPath,
        }}
        style={styles.thumbnail}
      />
      <View style={styles.headerDetail}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.follow}>+关注</Text>
    </View>
  )
}

function CardBody({ body }) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  )
}

function CardFooter({ like, comments, share }) {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerIconsContainer}>
        <View style={styles.footerItem}>
          <EvilIcons name="like" size={30} color={gray} />
          <Text style={styles.footerNum}>{like}</Text>
        </View>
        <View style={styles.footerItem}>
          <EvilIcons name="comment" size={30} color={gray} />
          <Text style={styles.footerNum}>{comments}</Text>
        </View>
        <View style={styles.footerItem}>
          <EvilIcons name="external-link" size={30} color={gray} />
          <Text style={styles.footerNum}>{share}</Text>
        </View>
      </View>
      <Ionicons name="ios-more" size={30} color={gray} />
    </View>
  )
}

class Card extends Component {
  render() {
    const data = this.props
    return (
      <View style={styles.container}>
        <CardHeader {...data} />
        <CardBody {...data} />
        <CardFooter {...data} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: lineGray,
    paddingRight: 10,
    backgroundColor: white,
  },
  headerContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDetail: {
    flex: 1,
  },
  name: {
    color: blue,
    fontSize: 16,
  },
  time: {
    color: gray,
    fontSize: 11,
  },
  follow: {
    color: red,
    fontSize: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  bodyContainer: {
    paddingLeft: 70,
  },
  bodyText: {
    paddingTop: 5,
    fontSize: 16,
    lineHeight: 25,
  },
  footerContainer: {
    paddingLeft: 70,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },
  footerIconsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerNum: {
    color: gray,
    fontSize: 12,
  },
})

export default Card
