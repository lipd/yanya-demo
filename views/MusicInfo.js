import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import TopBar from '../components/TopBar'
import Card from '../components/Card'

const mockData = [
  {
    id: 1,
    imgPath: 'mt1.jpg',
    name: '国家大剧院',
    time: '12月20日',
    body: `当歌剧邂逅电影，搭载上数字快车，将会给市民的生活带来怎么样的惊喜？

2017年12月5日至2018年1月21日，为进一步贯彻落实十九大精神，将习近平总书记“坚定文化自信，推动社会主义文化繁荣兴盛”的指示落到实处，国家大剧院将举办“歌剧电影展映月”。`,
    like: 1523,
    comments: 1324,
    share: 1223,
  },
]

class MusicInfo extends Component {
  keyExtractor = (item, index) => index

  renderItem = ({ item }) => {
    return <Card {...item}/>
  }

  render() {
    return (
      <View>
        <TopBar title="资讯" />
        <FlatList
          data={mockData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

export default MusicInfo
