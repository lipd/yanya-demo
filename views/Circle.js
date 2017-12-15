import React, { Component } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import TopBar from '../components/TopBar'
import { Entypo, Feather } from '@expo/vector-icons'
import { white, gray, lineGray, blueness } from '../utils/colors'

const path = 'file:///Users/lipeidao/Projects/yanya-demo/utils/img/'

const mockData = [
  {
    id: 1,
    imgPath: 'mt1.jpg',
    name: '国家大剧院粉丝圈'
  },
  {
    id: 2,
    imgPath: 'mt2.jpg',
    name: '上海音协'
  },
  {
    id: 3,
    imgPath: 'mt3.jpg',
    name: '中国音乐学院'
  },
  {
    id: 4,
    imgPath: 'mt4.jpg',
    name: '徐家班'
  },
  {
    id: 5,
    imgPath: 'f4.jpg',
    name: '北京昆曲票友圈'
  }
]

function CircleItem({ imgPath, name }) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.thumbnail} source={{ uri: path + imgPath }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>{name}</Text>
      </View>
      <Entypo name="chevron-thin-right" size={25} color={lineGray} />
    </View>
  )
}

class Circle extends Component {
  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    return <CircleItem {...item} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar title="圈子" />
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ backgroundColor: blueness }}
            data={mockData}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  thumbnail: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 3
  }
})

export default Circle
