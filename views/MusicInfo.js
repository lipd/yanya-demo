import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import TopBar from '../components/TopBar'
import Card from '../components/Card'
import { lineGray, blueness } from '../utils/colors'

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
    photos: ['pw1.jpg', 'pw2.jpg', 'pw3.jpg', 'pw4.jpg']
  },
  {
    id: 2,
    imgPath: 'mt2.jpg',
    name: '上海音协',
    time: '12月19日',
    body: `「作品征集」我带上你，你带上作品，我们一起来参加“上海之春2018合唱新作展演”吧`,
    like: 123,
    comments: 142,
    share: 67,
  },
  {
    id: 3,
    imgPath: 'mt3.jpg',
    name: '中国音乐学院',
    time: '12月20日',
    body: `冬季的校园不只有漂亮的姑娘和白发的先生，也有来这里等于上了三十所国际音乐院校的中国音`,
    like: 158,
    comments: 132,
    share: 243,
  },
  {
    id: 4,
    imgPath: 'mt4.jpg',
    name: '徐祝鑫',
    time: '12月19日',
    body: `感谢大家今天下午对我们的支持！欢迎今晚大家继续关注中国音乐学院声歌系2013级毕业大戏！今晚给大家带来的是歌剧《再别康桥》音乐剧《歌剧魅影》和歌剧《尤丽狄茜》`,
    like: 69,
    comments: 23,
    share: 92,
  },
]

class MusicInfo extends Component {
  keyExtractor = (item, index) => index

  renderItem = ({ item }) => {
    return <Card {...item} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar title="资讯" />
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ paddingTop: 10, backgroundColor: blueness }}
            data={mockData}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    )
  }
}

export default MusicInfo
