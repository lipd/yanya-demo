import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TopBar from '../components/TopBar'
import NameCard from '../components/NameCard'
import List from '../components/List'
import { lineGray, white, yellow } from '../utils/colors'

class Mine extends Component {
  render() {
    const test = [
      {
        title: 'test1',
        icon: () => (
          <MaterialCommunityIcons
            name="music-circle"
            size={30}
            color={yellow}
          />
        )
      },
      {
        title: 'test2',
        icon: () => (
          <MaterialCommunityIcons
            name="music-circle"
            size={30}
            color={yellow}
          />
        )
      }
    ]
    return (
      <View style={{ flex: 1 }}>
        <TopBar title="我的" />
        <ScrollView style={{ flex: 1, backgroundColor: lineGray }}>
          <NameCard />
          <List items={test} />
        </ScrollView>
      </View>
    )
  }
}

export default Mine
