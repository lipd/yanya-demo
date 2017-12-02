import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TopBar from '../components/TopBar'
import ScrollTopBar from '../components/ScrollTopBar'
import ScrollCard from '../components/ScrollCard'
import MiddleBar from '../components/MiddleBar'

class MusicLibrary extends Component {
  render() {
    const classTopics = ['交响乐', '室内乐', '歌剧', '独奏作品', '美声作品']
    const tranTopics = ['民歌', '戏曲', '说唱', '器乐', '现代国乐']
    return (
      <View>
        <TopBar title="音乐库" />
        <ScrollTopBar topics={classTopics} category={'西乐'} />
        <ScrollTopBar topics={tranTopics} category={'国乐'} />
        <ScrollCard type="commend" num={3} title="今日推荐" />
        <MiddleBar />
        <ScrollCard type="hot" num={5} title="热门专辑" />
      </View>
    )
  }
}

export default MusicLibrary
